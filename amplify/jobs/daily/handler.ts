import { generateClient } from 'aws-amplify/api';
import type { EventBridgeHandler } from "aws-lambda";
import type { Schema } from '../../data/resource';

const client = generateClient<Schema>();

export const handler: EventBridgeHandler<"Scheduled Event", null, void> = async (event) => {
  // TODO
  console.log("event", JSON.stringify(event, null, 2))

  const today = new Date().toISOString().substring(0, 10);
  console.log('today', today)

    client.models.Payment.list({
      filter: {
        nextDate: {
          eq: today
        }
      }
    })
      .then(({ data: payments }) => {
        console.log('matches', payments)
      });
}
