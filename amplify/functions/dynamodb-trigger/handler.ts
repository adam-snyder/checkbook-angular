import { Logger } from "@aws-lambda-powertools/logger";
// import { Amplify } from 'aws-amplify';
import type { DynamoDBStreamHandler } from "aws-lambda";
// import { env } from '$amplify/env';

// npx ampx generate graphql-client-code --out amplify/functions/dynamodb-trigger/graphql --stack arn:aws:cloudformation:us-east-1:989838532044:stack/amplify-d3bwsthjxfu8fk-main-branch-de111cae27/5de04350-843b-11ef-955c-124852ae4e3d --profile amplify-policy-989838532044
// Amplify.configure({
//
// });


const logger = new Logger({
  logLevel: "INFO",
  serviceName: "dynamodb-stream-handler",
});

// const client = generateClient<Schema>({
//   authMode: 'apiKey'
// });

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

  // return await client.models.Payment.list()
  //   .then((result) => {
  //     console.log('result', result);
  //
  //     return {
  //       batchItemFailures: [],
  //     };
  //   });


  return {
    batchItemFailures: [],
  };
};
