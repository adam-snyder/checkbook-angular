import { a, type ClientSchema, defineData } from '@aws-amplify/backend';
import { dailyPayments } from '../functions/daily-payments/resource';
import { dynamodbTrigger } from '../functions/dynamodb-trigger/resource';


const schema = a.schema({
  // Enums
  RepeatType: a.enum(['year', 'month', 'biweek', 'week']),
  TransactType: a.enum(['credit', 'debit']),

  // Models
  Record: a
    .model({
      name: a.string().required(),
      type: a.ref('TransactType'),
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
    .authorization((allow) => [allow.publicApiKey()]),
  Payment: a
    .model({
      name: a.string().required(),
      type: a.ref('TransactType'),
      category: a.string(),
      amount: a.float().required(),
      isEstimate: a.boolean().default(false),
      isRepeat: a.boolean().default(false),
      repeatType: a.ref('RepeatType'),
      futureCopies: a.integer().default(1),
      nextDate: a.date(),
      lastProcessDate: a.datetime().default('1970-01-01T00:00:00.000Z'),
      records: a.hasMany('Record', 'paymentId'),
    })
    .authorization((allow) => [allow.publicApiKey()]),
})
  // Provide access to data model for back-end functions
  .authorization((allow) => [
    allow.resource(dynamodbTrigger),
    allow.resource(dailyPayments),
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
