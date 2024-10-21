/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPayment = /* GraphQL */ `query GetPayment($id: ID!) {
  getPayment(id: $id) {
    amount
    category
    createdAt
    futureCopies
    id
    isEstimate
    isRepeat
    lastProcessDate
    name
    nextDate
    records {
      nextToken
      __typename
    }
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
export const getRecord = /* GraphQL */ `query GetRecord($id: ID!) {
  getRecord(id: $id) {
    amount
    category
    comment
    createdAt
    id
    isArchived
    isEstimate
    isPending
    isRepeat
    name
    payment {
      amount
      category
      createdAt
      futureCopies
      id
      isEstimate
      isRepeat
      lastProcessDate
      name
      nextDate
      repeatType
      type
      updatedAt
      __typename
    }
    paymentId
    postDate
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
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      amount
      category
      createdAt
      futureCopies
      id
      isEstimate
      isRepeat
      lastProcessDate
      name
      nextDate
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
) {
  listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      amount
      category
      comment
      createdAt
      id
      isArchived
      isEstimate
      isPending
      isRepeat
      name
      paymentId
      postDate
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
