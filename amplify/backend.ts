import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { dailyProcess } from './jobs/daily/resource';

defineBackend({
  auth,
  data,
  dailyProcess,
});
