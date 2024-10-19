import { defineFunction } from "@aws-amplify/backend";

export const dailyProcess = defineFunction({
  name: "daily-process",
  schedule: "every day",
});
