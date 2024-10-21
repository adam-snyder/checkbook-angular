import { env } from '$amplify/env/daily-payments';
import type { EventBridgeHandler } from "aws-lambda";
import { bootstrapClient } from '../../shared/api-config';
import { listPayments } from '../../shared/graphql/queries';
import { processPayment } from '../../shared/process-payment';

const client = bootstrapClient(env);

export const handler: EventBridgeHandler<"Scheduled Event", null, void> = async (event) => {

  const utcNow = event.time ? new Date(event.time): new Date();
  const localNow = toTimezone(utcNow, 'America/New_York')
  const today = localNow.toISOString().slice(0, 10);

  console.log('Checking payments for:', today);

  return client.graphql({
    query: listPayments,
    variables: {
      filter: {
        isRepeat: { eq: true },
        nextDate: { le: today },
      }
    }
  })
    .then(({ data, errors }) => {
      if (errors) {
        console.error('Failed to fetch payments:', errors);
        return;
      }

      const payments = data.listPayments.items;
      if (!payments.length) {
        console.log('No matching payments');
        return;
      }

      console.log('Found matching payments:', payments.length);

      return Promise.all([
        ...payments.map(payment => {
          return processPayment(payment, today)
            .then(() => {
              console.log('Successfully processed payment:', payment.id);
            })
            .catch((error) => {
              console.error('Failed to process payment:', payment.id);
            });
        })
      ])
    })
    .then(() => {});
}

function toTimezone(date: Date | string, timeZone: string): Date {
  return new Date((typeof date === 'string' ? new Date(date) : date)
    .toLocaleString("en-US", {timeZone}));
}
