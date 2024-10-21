import { V6Client } from '@aws-amplify/api-graphql';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../data/resource';

export const apiAccess = (env: any): any => {
  return {
    GraphQL: {
      endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
      region: env.AWS_REGION,
      defaultAuthMode: 'iam',
    }
  };
};

export const iamAuth = (env: any): any => {
  return {
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
    }
  };
}

export function bootstrapClient(env: any): V6Client<Schema> {
  Amplify.configure(
    {
      API: apiAccess(env)
    },
    {
      Auth: iamAuth(env)
    }
  );

  return generateClient<Schema>({
    authMode: 'iam'
  });
}
