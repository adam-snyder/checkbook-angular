## AWS Amplify Angular.js Starter Template

This repository provides a starter template for creating applications using Angular.js and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Angular.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/angular/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.


```bash
npx ampx sandbox --profile amplify-policy-989838532044
```

```bash
npx ampx generate outputs --stack arn:aws:cloudformation:us-east-1:989838532044:stack/amplify-amplifyangulartemplate-asnyder-sandbox-5e8f97f189/f1169dc0-84ab-11ef-81fd-129dd933dbb7 --profile amplify-policy-989838532044
```

```bash
npx ampx generate graphql-client-code --out amplify/functions/dynamodb-trigger/graphql --stack arn:aws:cloudformation:us-east-1:989838532044:stack/amplify-amplifyangulartemplate-asnyder-sandbox-5e8f97f189/f1169dc0-84ab-11ef-81fd-129dd933dbb7 --profile amplify-policy-989838532044
```

--profile amplify-policy-989838532044
--stack arn:aws:cloudformation:us-east-1:989838532044:stack/amplify-amplifyangulartemplate-asnyder-sandbox-5e8f97f189/f1169dc0-84ab-11ef-81fd-129dd933dbb7
