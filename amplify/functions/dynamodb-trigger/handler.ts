import { Logger } from "@aws-lambda-powertools/logger";
import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/data";
import type { DynamoDBStreamHandler } from "aws-lambda";
import { env } from '$amplify/env/dynamodb-trigger';
import { Schema } from '../../data/resource';
import { listPayments } from './graphql/queries';

// npx ampx generate graphql-client-code --out amplify/functions/dynamodb-trigger/graphql --stack arn:aws:cloudformation:us-east-1:989838532044:stack/amplify-d3bwsthjxfu8fk-main-branch-de111cae27/5de04350-843b-11ef-955c-124852ae4e3d --profile amplify-policy-989838532044
Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);


const logger = new Logger({
  logLevel: "INFO",
  serviceName: "dynamodb-stream-handler",
});

const client = generateClient<Schema>({
  authMode: 'iam'
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

  return await client.graphql({
    query: listPayments,
  })
    .then((result) => {
      console.log('result', result);

      return {
        batchItemFailures: [],
      };
    });

  // return {
  //   batchItemFailures: [],
  // };
};
