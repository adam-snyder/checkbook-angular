import { Logger } from "@aws-lambda-powertools/logger";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import type { DynamoDBStreamHandler } from "aws-lambda";
import { Schema } from '../../data/resource';

const logger = new Logger({
  logLevel: "INFO",
  serviceName: "dynamodb-stream-handler",
});

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: 'https://h5z6p4lk5fbjroqw4esr5ygwwa.appsync-api.us-east-1.amazonaws.com/graphql',
        region: 'us-east-1',
        defaultAuthMode: 'apiKey',
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: 'apiKey'
});

export const handler: DynamoDBStreamHandler = async (event) => {
  for (const record of event.Records) {
    logger.info(`Processing record: ${record.eventID}`);
    logger.info(`Event Type: ${record.eventName}`);

    if (record.eventName === "INSERT") {
      // business logic to process new records
      logger.info(`New Image: ${JSON.stringify(record.dynamodb?.NewImage)}`);
    }
  }
  logger.info(`Successfully processed ${event.Records.length} records.`);

  return await client.models.Payment.list()
    .then((result) => {
      console.log('result', result);

      return {
        batchItemFailures: [],
      };
    });

  //
  // return {
  //   batchItemFailures: [],
  // };
};
