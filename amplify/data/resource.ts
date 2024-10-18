import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Record: a
    .model({
      recordId: a.id().required(),
      name: a.string().required(),
      category: a.string(),
      amount: a.float().required(),
      isRepeat: a.boolean(),
      postDate: a.date().required(),
      paymentId: a.id().required(),
      payment: a.belongsTo('Payment', 'paymentId'),
    })
    .identifier(['recordId'])
    .secondaryIndexes((index) => [
      index('recordId').sortKeys(['postDate']),
    ])
    .authorization((allow) => [allow.publicApiKey()]),
  Payment: a
    .model({
      paymentId: a.id().required(),
      name: a.string().required(),
      category: a.string(),
      amount: a.float().required(),
      isRepeat: a.boolean(),
      repeatType: a.enum(['year', 'month', 'biweek', 'week']),
      repeatDay: a.integer(),  // day of year/month/week
      lastDate: a.date(),
      nextDate: a.date(),
      records: a.hasMany('Record', 'paymentId'),
    })
    .identifier(['paymentId'])
    .secondaryIndexes((index) => [
      index('paymentId').sortKeys(['nextDate']),
    ])
    .authorization((allow) => [allow.publicApiKey()]),
});

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
