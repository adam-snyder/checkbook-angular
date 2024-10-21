/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePayment = /* GraphQL */ `subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onCreatePayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePaymentSubscriptionVariables,
  APITypes.OnCreatePaymentSubscription
>;
export const onCreateRecord = /* GraphQL */ `subscription OnCreateRecord($filter: ModelSubscriptionRecordFilterInput) {
  onCreateRecord(filter: $filter) {
    amount
    category
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
` as GeneratedSubscription<
  APITypes.OnCreateRecordSubscriptionVariables,
  APITypes.OnCreateRecordSubscription
>;
export const onDeletePayment = /* GraphQL */ `subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onDeletePayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePaymentSubscriptionVariables,
  APITypes.OnDeletePaymentSubscription
>;
export const onDeleteRecord = /* GraphQL */ `subscription OnDeleteRecord($filter: ModelSubscriptionRecordFilterInput) {
  onDeleteRecord(filter: $filter) {
    amount
    category
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecordSubscriptionVariables,
  APITypes.OnDeleteRecordSubscription
>;
export const onUpdatePayment = /* GraphQL */ `subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onUpdatePayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePaymentSubscriptionVariables,
  APITypes.OnUpdatePaymentSubscription
>;
export const onUpdateRecord = /* GraphQL */ `subscription OnUpdateRecord($filter: ModelSubscriptionRecordFilterInput) {
  onUpdateRecord(filter: $filter) {
    amount
    category
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecordSubscriptionVariables,
  APITypes.OnUpdateRecordSubscription
>;
