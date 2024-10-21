/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPayment = /* GraphQL */ `mutation CreatePayment(
  $condition: ModelPaymentConditionInput
  $input: CreatePaymentInput!
) {
  createPayment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePaymentMutationVariables,
  APITypes.CreatePaymentMutation
>;
export const createRecord = /* GraphQL */ `mutation CreateRecord(
  $condition: ModelRecordConditionInput
  $input: CreateRecordInput!
) {
  createRecord(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateRecordMutationVariables,
  APITypes.CreateRecordMutation
>;
export const deletePayment = /* GraphQL */ `mutation DeletePayment(
  $condition: ModelPaymentConditionInput
  $input: DeletePaymentInput!
) {
  deletePayment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePaymentMutationVariables,
  APITypes.DeletePaymentMutation
>;
export const deleteRecord = /* GraphQL */ `mutation DeleteRecord(
  $condition: ModelRecordConditionInput
  $input: DeleteRecordInput!
) {
  deleteRecord(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteRecordMutationVariables,
  APITypes.DeleteRecordMutation
>;
export const updatePayment = /* GraphQL */ `mutation UpdatePayment(
  $condition: ModelPaymentConditionInput
  $input: UpdatePaymentInput!
) {
  updatePayment(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePaymentMutationVariables,
  APITypes.UpdatePaymentMutation
>;
export const updateRecord = /* GraphQL */ `mutation UpdateRecord(
  $condition: ModelRecordConditionInput
  $input: UpdateRecordInput!
) {
  updateRecord(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateRecordMutationVariables,
  APITypes.UpdateRecordMutation
>;
