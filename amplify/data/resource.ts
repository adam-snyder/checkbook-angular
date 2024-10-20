import { a, type ClientSchema, defineData } from '@aws-amplify/backend';
import { dynamodbTrigger } from '../functions/dynamodb-trigger/resource';

const schema = a.schema({
  Record: a
    .model({
      recordId: a.id().required(),
      name: a.string().required(),
      type: a.enum(['credit', 'debit']),
      category: a.string(),
      amount: a.float().required(),
      isEstimate: a.boolean().default(false),
      isRepeat: a.boolean().default(false),
      isPending: a.boolean().default(true),
      isArchived: a.boolean().default(false),
      postDate: a.date().required(),
      paymentId: a.id(),
      payment: a.belongsTo('Payment', 'paymentId'),
    })
    .identifier(['recordId'])
    .authorization((allow) => [allow.publicApiKey()]),
  Payment: a
    .model({
      paymentId: a.id().required(),
      name: a.string().required(),
      type: a.enum(['credit', 'debit']),
      category: a.string(),
      amount: a.float().required(),
      isEstimate: a.boolean().default(false),
      isRepeat: a.boolean().default(false),
      repeatType: a.enum(['year', 'month', 'biweek', 'week']),
      repeatDay: a.integer(),  // day of year/month/week
      lastProcessDate: a.datetime().default('1970-01-01T00:00:00.000Z'),
      nextDate: a.date(),
      records: a.hasMany('Record', 'paymentId'),
    })
    .identifier(['paymentId'])
    .authorization((allow) => [allow.publicApiKey()]),
})
  .authorization((allow) => [
    allow.resource(dynamodbTrigger),
  ]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey', //'userPool',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
