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

local AWS profile:
amplify-policy-989838532044

Terminal env:
AWS_DEFAULT_PROFILE=amplify-policy-989838532044

localdev stack id:
arn:aws:cloudformation:us-east-1:989838532044:stack/amplify-amplifyangulartemplate-localdev-sandbox-323ac5b231/707cc340-8eee-11ef-94e9-0affce897f03

main branch stack id:
arn:aws:cloudformation:us-east-1:989838532044:stack/amplify-d3bwsthjxfu8fk-main-branch-de111cae27/5de04350-843b-11ef-955c-124852ae4e3d

AWS SSO Login
```bash
aws sso login --profile amplify-policy-989838532044
```

Local development, deploys back-end resources
```bash
npx ampx sandbox --identifier localdev --profile amplify-policy-989838532044
```

```bash
npx ampx generate outputs --stack {STACK_ID} --profile amplify-policy-989838532044
```

```bash
npx ampx generate graphql-client-code --out amplify/functions/dynamodb-trigger/graphql --stack {STACK_ID} --profile amplify-policy-989838532044
```
