// import { env } from '$amplify/env/dynamodb-trigger';
import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/data";
import type { DynamoDBStreamHandler } from "aws-lambda";
import { Schema } from '../../data/resource';

// Amplify.configure(
//   {
//     API: {
//       GraphQL: {
//         endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
//         region: env.AWS_REGION,
//         defaultAuthMode: "iam",
//       },
//     },
//   },
//   {
//     Auth: {
//       credentialsProvider: {
//         getCredentialsAndIdentityId: async () => ({
//           credentials: {
//             accessKeyId: env.AWS_ACCESS_KEY_ID,
//             secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
//             sessionToken: env.AWS_SESSION_TOKEN,
//           },
//         }),
//         clearCredentialsAndIdentityId: () => {
//           /* noop */
//         },
//       },
//     },
//   }
// );


// const logger = new Logger({
//   logLevel: "INFO",
//   serviceName: "dynamodb-stream-handler",
// });

// const client = generateClient<Schema>({
//   authMode: 'iam'
// });

export const handler: DynamoDBStreamHandler = async (event) => {
  for (const record of event.Records) {
    console.info(`Processing record: ${record.eventID}`);
    console.info(`Event Type: ${record.eventName}`);

    if (record.eventName === "INSERT") {
      // business logic to process new records
      console.info(`New Image: ${JSON.stringify(record.dynamodb?.NewImage)}`);
    }
  }
  console.info(`Successfully processed ${event.Records.length} records.`);

  // TODO
  // return await client.graphql({
  //   query: listPayments,
  // })
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
