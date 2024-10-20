/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPayment = /* GraphQL */ `query GetPayment($paymentId: ID!) {
  getPayment(paymentId: $paymentId) {
    amount
    category
    createdAt
    isEstimate
    isRepeat
    lastProcessDate
    name
    nextDate
    paymentId
    records {
      nextToken
      __typename
    }
    repeatDay
    repeatType
    type
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPaymentQueryVariables,
  APITypes.GetPaymentQuery
>;
export const getRecord = /* GraphQL */ `query GetRecord($recordId: ID!) {
  getRecord(recordId: $recordId) {
    amount
    category
    createdAt
    isArchived
    isEstimate
    isPending
    isRepeat
    name
    payment {
      amount
      category
      createdAt
      isEstimate
      isRepeat
      lastProcessDate
      name
      nextDate
      paymentId
      repeatDay
      repeatType
      type
      updatedAt
      __typename
    }
    paymentId
    postDate
    recordId
    type
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRecordQueryVariables, APITypes.GetRecordQuery>;
export const listPayments = /* GraphQL */ `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
  $paymentId: ID
  $sortDirection: ModelSortDirection
) {
  listPayments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    paymentId: $paymentId
    sortDirection: $sortDirection
  ) {
    items {
      amount
      category
      createdAt
      isEstimate
      isRepeat
      lastProcessDate
      name
      nextDate
      paymentId
      repeatDay
      repeatType
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentsQueryVariables,
  APITypes.ListPaymentsQuery
>;
export const listRecords = /* GraphQL */ `query ListRecords(
  $filter: ModelRecordFilterInput
  $limit: Int
  $nextToken: String
  $recordId: ID
  $sortDirection: ModelSortDirection
) {
  listRecords(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    recordId: $recordId
    sortDirection: $sortDirection
  ) {
    items {
      amount
      category
      createdAt
      isArchived
      isEstimate
      isPending
      isRepeat
      name
      paymentId
      postDate
      recordId
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecordsQueryVariables,
  APITypes.ListRecordsQuery
>;
