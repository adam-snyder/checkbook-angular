import { defineFunction } from "@aws-amplify/backend";

export const dailyPayments = defineFunction({
  name: 'daily-payments',
  schedule: '0 7 * * ? *'
});
