import { defineBackend } from '@aws-amplify/backend';
import { Stack } from 'aws-cdk-lib';
import { Effect, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { EventSourceMapping, StartingPosition } from 'aws-cdk-lib/aws-lambda';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { dynamodbTrigger } from './functions/dynamodb-trigger/resource';

const backend = defineBackend({
  auth,
  data,
  dynamodbTrigger
});

const paymentTable = backend.data.resources.tables['Payment'];
const recordTable = backend.data.resources.tables['Record'];

const paymentPolicy = new Policy(
  Stack.of(paymentTable),
  'DynamoDBFunctionPaymentStreamingPolicy',
  {
    statements: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'dynamodb:DescribeStream',
          'dynamodb:GetRecords',
          'dynamodb:GetShardIterator',
          'dynamodb:ListStreams',
        ],
        resources: ['*'],
      }),
    ],
  }
);
const recordPolicy = new Policy(
  Stack.of(recordTable),
  'DynamoDBFunctionRecordStreamingPolicy',
  {
    statements: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'dynamodb:DescribeStream',
          'dynamodb:GetRecords',
          'dynamodb:GetShardIterator',
          'dynamodb:ListStreams',
        ],
        resources: ['*'],
      }),
    ],
  }
);

backend.dynamodbTrigger.resources.lambda.role?.attachInlinePolicy(paymentPolicy);
backend.dynamodbTrigger.resources.lambda.role?.attachInlinePolicy(recordPolicy);

const paymentMapping = new EventSourceMapping(
  Stack.of(paymentTable),
  'DynamoDBFunctionPaymentEventStreamMapping',
  {
    target: backend.dynamodbTrigger.resources.lambda,
    eventSourceArn: paymentTable.tableStreamArn,
    startingPosition: StartingPosition.LATEST,
  }
);

const recordMapping = new EventSourceMapping(
  Stack.of(recordTable),
  'DynamoDBFunctionRecordEventStreamMapping',
  {
    target: backend.dynamodbTrigger.resources.lambda,
    eventSourceArn: recordTable.tableStreamArn,
    startingPosition: StartingPosition.LATEST,
  }
);

paymentMapping.node.addDependency(paymentPolicy);
recordMapping.node.addDependency(recordPolicy);
