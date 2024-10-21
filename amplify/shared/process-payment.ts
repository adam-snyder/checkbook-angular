import { env } from '$amplify/env/daily-payments';
import { bootstrapClient } from './api-config';
import { Payment, Record } from './graphql/API';
import { createRecord, updatePayment } from './graphql/mutations';
import { getPayment } from './graphql/queries';

const client = bootstrapClient(env);

// Note: Assumes nextDate and repeatType are non-null
export const processPayment = async (paymentOrId: Payment | string): Promise<Record | null> => {

  let paymentId: string;
  let getPayment$: () => Promise<any>;

  if (typeof paymentOrId === 'string') {
    paymentId = paymentOrId;
    getPayment$ = async () => {
      console.log('Fetching payment:', paymentId);

      return client.graphql({
        query: getPayment,
        variables: { id: paymentId }
      }).then((result) => {
        if (result.errors) {
          console.error('Failed to fetch payment', result.errors);
          return null;
        }
        return result.data.getPayment;
      });
    };
  } else {
    paymentId = paymentOrId.id;
    getPayment$ = async () => paymentOrId;
  }

  const createRecord$ = (payment: Payment) => {
    const attrs = {
      // Link to payment
      paymentId: payment.id,
      // Copy from payment
      type: payment.type,
      category: payment.category,
      name: payment.name,
      amount: payment.amount,
      isRepeat: payment.isRepeat,
      isEstimate: payment.isEstimate,
      // Start pending
      isPending: true,
      postDate: payment.nextDate,
    };

    console.log('Creating record:', attrs);

    return client.graphql({
      query: createRecord,
      variables: {
        input: attrs
      }
    }).then((result) => {
      if (result.errors) {
        console.error('Failed to create record', result.errors);
        return null;
      }
      return result.data.createRecord;
    });
  };

  const updatePayment$ = (payment: Payment) => {

    const attrs: any = {
      id: paymentId,
      lastProcessDate: new Date().toISOString(),
    };

    // TODO eventually check if repeat end is met
    if (payment.isRepeat) {

      const current = payment.nextDate ? new Date(payment.nextDate) : new Date();
      let next = new Date(current);
      switch (payment.repeatType) {
        case 'year':
          next = new Date(next.setFullYear(next.getFullYear() + 1));
          break;
        case 'month':
          next = new Date(next.setMonth(next.getMonth() + 1));
          break;
        case 'biweek':
          next = new Date(next.setDate(next.getDate() + 2 * 7));
          break;
        case 'week':
          next = new Date(next.setDate(next.getDate() + 7));
          break;
      }

      attrs.nextDate = next.toISOString().substring(0, 10);
    }

    console.log('Updating payment:', attrs);

    return client.graphql({
      query: updatePayment,
      variables: {
        input: attrs
      }
    }).then((result) => {
      if (result.errors) {
        console.error('Failed to update payment', result.errors);
        return null;
      }
      return result.data.updatePayment;
    });
  };

  return getPayment$()
    .then((payment) => {
      if (!payment) {
        return null;
      }

      return createRecord$(<Payment>payment)
        .then((record) => {
          if (!record) {
            return null;
          }

          return updatePayment$(<Payment>payment)
            .then(() => {
              return <Record>record;
            });
        });
    });
}


