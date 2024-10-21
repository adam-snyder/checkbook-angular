/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Payment = {
  __typename: "Payment",
  amount: number,
  category?: string | null,
  createdAt: string,
  futureCopies?: number | null,
  id: string,
  isEstimate?: boolean | null,
  isRepeat?: boolean | null,
  lastProcessDate?: string | null,
  name: string,
  nextDate?: string | null,
  records?: ModelRecordConnection | null,
  repeatType?: RepeatType | null,
  type?: TransactType | null,
  updatedAt: string,
};

export type ModelRecordConnection = {
  __typename: "ModelRecordConnection",
  items:  Array<Record | null >,
  nextToken?: string | null,
};

export type Record = {
  __typename: "Record",
  amount: number,
  category?: string | null,
  createdAt: string,
  id: string,
  isArchived?: boolean | null,
  isEstimate?: boolean | null,
  isPending?: boolean | null,
  isRepeat?: boolean | null,
  name: string,
  payment?: Payment | null,
  paymentId?: string | null,
  postDate: string,
  type?: TransactType | null,
  updatedAt: string,
};

export enum TransactType {
  credit = "credit",
  debit = "debit",
}


export enum RepeatType {
  biweek = "biweek",
  month = "month",
  week = "week",
  year = "year",
}


export type ModelPaymentFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  futureCopies?: ModelIntInput | null,
  id?: ModelIDInput | null,
  isEstimate?: ModelBooleanInput | null,
  isRepeat?: ModelBooleanInput | null,
  lastProcessDate?: ModelStringInput | null,
  name?: ModelStringInput | null,
  nextDate?: ModelStringInput | null,
  not?: ModelPaymentFilterInput | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  repeatType?: ModelRepeatTypeInput | null,
  type?: ModelTransactTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelRepeatTypeInput = {
  eq?: RepeatType | null,
  ne?: RepeatType | null,
};

export type ModelTransactTypeInput = {
  eq?: TransactType | null,
  ne?: TransactType | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
};

export type ModelRecordFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelRecordFilterInput | null > | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isArchived?: ModelBooleanInput | null,
  isEstimate?: ModelBooleanInput | null,
  isPending?: ModelBooleanInput | null,
  isRepeat?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelRecordFilterInput | null,
  or?: Array< ModelRecordFilterInput | null > | null,
  paymentId?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  type?: ModelTransactTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPaymentConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  futureCopies?: ModelIntInput | null,
  isEstimate?: ModelBooleanInput | null,
  isRepeat?: ModelBooleanInput | null,
  lastProcessDate?: ModelStringInput | null,
  name?: ModelStringInput | null,
  nextDate?: ModelStringInput | null,
  not?: ModelPaymentConditionInput | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  repeatType?: ModelRepeatTypeInput | null,
  type?: ModelTransactTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePaymentInput = {
  amount: number,
  category?: string | null,
  futureCopies?: number | null,
  id?: string | null,
  isEstimate?: boolean | null,
  isRepeat?: boolean | null,
  lastProcessDate?: string | null,
  name: string,
  nextDate?: string | null,
  repeatType?: RepeatType | null,
  type?: TransactType | null,
};

export type ModelRecordConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelRecordConditionInput | null > | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isArchived?: ModelBooleanInput | null,
  isEstimate?: ModelBooleanInput | null,
  isPending?: ModelBooleanInput | null,
  isRepeat?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelRecordConditionInput | null,
  or?: Array< ModelRecordConditionInput | null > | null,
  paymentId?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  type?: ModelTransactTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRecordInput = {
  amount: number,
  category?: string | null,
  id?: string | null,
  isArchived?: boolean | null,
  isEstimate?: boolean | null,
  isPending?: boolean | null,
  isRepeat?: boolean | null,
  name: string,
  paymentId?: string | null,
  postDate: string,
  type?: TransactType | null,
};

export type DeletePaymentInput = {
  id: string,
};

export type DeleteRecordInput = {
  id: string,
};

export type UpdatePaymentInput = {
  amount?: number | null,
  category?: string | null,
  futureCopies?: number | null,
  id: string,
  isEstimate?: boolean | null,
  isRepeat?: boolean | null,
  lastProcessDate?: string | null,
  name?: string | null,
  nextDate?: string | null,
  repeatType?: RepeatType | null,
  type?: TransactType | null,
};

export type UpdateRecordInput = {
  amount?: number | null,
  category?: string | null,
  id: string,
  isArchived?: boolean | null,
  isEstimate?: boolean | null,
  isPending?: boolean | null,
  isRepeat?: boolean | null,
  name?: string | null,
  paymentId?: string | null,
  postDate?: string | null,
  type?: TransactType | null,
};

export type ModelSubscriptionPaymentFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  futureCopies?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  isEstimate?: ModelSubscriptionBooleanInput | null,
  isRepeat?: ModelSubscriptionBooleanInput | null,
  lastProcessDate?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  nextDate?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  repeatType?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionRecordFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionRecordFilterInput | null > | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isArchived?: ModelSubscriptionBooleanInput | null,
  isEstimate?: ModelSubscriptionBooleanInput | null,
  isPending?: ModelSubscriptionBooleanInput | null,
  isRepeat?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionRecordFilterInput | null > | null,
  paymentId?: ModelSubscriptionIDInput | null,
  postDate?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    amount: number,
    category?: string | null,
    createdAt: string,
    futureCopies?: number | null,
    id: string,
    isEstimate?: boolean | null,
    isRepeat?: boolean | null,
    lastProcessDate?: string | null,
    name: string,
    nextDate?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      nextToken?: string | null,
    } | null,
    repeatType?: RepeatType | null,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type GetRecordQueryVariables = {
  id: string,
};

export type GetRecordQuery = {
  getRecord?:  {
    __typename: "Record",
    amount: number,
    category?: string | null,
    createdAt: string,
    id: string,
    isArchived?: boolean | null,
    isEstimate?: boolean | null,
    isPending?: boolean | null,
    isRepeat?: boolean | null,
    name: string,
    payment?:  {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null,
    paymentId?: string | null,
    postDate: string,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRecordsQueryVariables = {
  filter?: ModelRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecordsQuery = {
  listRecords?:  {
    __typename: "ModelRecordConnection",
    items:  Array< {
      __typename: "Record",
      amount: number,
      category?: string | null,
      createdAt: string,
      id: string,
      isArchived?: boolean | null,
      isEstimate?: boolean | null,
      isPending?: boolean | null,
      isRepeat?: boolean | null,
      name: string,
      paymentId?: string | null,
      postDate: string,
      type?: TransactType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreatePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: CreatePaymentInput,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    amount: number,
    category?: string | null,
    createdAt: string,
    futureCopies?: number | null,
    id: string,
    isEstimate?: boolean | null,
    isRepeat?: boolean | null,
    lastProcessDate?: string | null,
    name: string,
    nextDate?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      nextToken?: string | null,
    } | null,
    repeatType?: RepeatType | null,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type CreateRecordMutationVariables = {
  condition?: ModelRecordConditionInput | null,
  input: CreateRecordInput,
};

export type CreateRecordMutation = {
  createRecord?:  {
    __typename: "Record",
    amount: number,
    category?: string | null,
    createdAt: string,
    id: string,
    isArchived?: boolean | null,
    isEstimate?: boolean | null,
    isPending?: boolean | null,
    isRepeat?: boolean | null,
    name: string,
    payment?:  {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null,
    paymentId?: string | null,
    postDate: string,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type DeletePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: DeletePaymentInput,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    amount: number,
    category?: string | null,
    createdAt: string,
    futureCopies?: number | null,
    id: string,
    isEstimate?: boolean | null,
    isRepeat?: boolean | null,
    lastProcessDate?: string | null,
    name: string,
    nextDate?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      nextToken?: string | null,
    } | null,
    repeatType?: RepeatType | null,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type DeleteRecordMutationVariables = {
  condition?: ModelRecordConditionInput | null,
  input: DeleteRecordInput,
};

export type DeleteRecordMutation = {
  deleteRecord?:  {
    __typename: "Record",
    amount: number,
    category?: string | null,
    createdAt: string,
    id: string,
    isArchived?: boolean | null,
    isEstimate?: boolean | null,
    isPending?: boolean | null,
    isRepeat?: boolean | null,
    name: string,
    payment?:  {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null,
    paymentId?: string | null,
    postDate: string,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: UpdatePaymentInput,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    amount: number,
    category?: string | null,
    createdAt: string,
    futureCopies?: number | null,
    id: string,
    isEstimate?: boolean | null,
    isRepeat?: boolean | null,
    lastProcessDate?: string | null,
    name: string,
    nextDate?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      nextToken?: string | null,
    } | null,
    repeatType?: RepeatType | null,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type UpdateRecordMutationVariables = {
  condition?: ModelRecordConditionInput | null,
  input: UpdateRecordInput,
};

export type UpdateRecordMutation = {
  updateRecord?:  {
    __typename: "Record",
    amount: number,
    category?: string | null,
    createdAt: string,
    id: string,
    isArchived?: boolean | null,
    isEstimate?: boolean | null,
    isPending?: boolean | null,
    isRepeat?: boolean | null,
    name: string,
    payment?:  {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null,
    paymentId?: string | null,
    postDate: string,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    amount: number,
    category?: string | null,
    createdAt: string,
    futureCopies?: number | null,
    id: string,
    isEstimate?: boolean | null,
    isRepeat?: boolean | null,
    lastProcessDate?: string | null,
    name: string,
    nextDate?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      nextToken?: string | null,
    } | null,
    repeatType?: RepeatType | null,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRecordSubscriptionVariables = {
  filter?: ModelSubscriptionRecordFilterInput | null,
};

export type OnCreateRecordSubscription = {
  onCreateRecord?:  {
    __typename: "Record",
    amount: number,
    category?: string | null,
    createdAt: string,
    id: string,
    isArchived?: boolean | null,
    isEstimate?: boolean | null,
    isPending?: boolean | null,
    isRepeat?: boolean | null,
    name: string,
    payment?:  {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null,
    paymentId?: string | null,
    postDate: string,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    amount: number,
    category?: string | null,
    createdAt: string,
    futureCopies?: number | null,
    id: string,
    isEstimate?: boolean | null,
    isRepeat?: boolean | null,
    lastProcessDate?: string | null,
    name: string,
    nextDate?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      nextToken?: string | null,
    } | null,
    repeatType?: RepeatType | null,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecordSubscriptionVariables = {
  filter?: ModelSubscriptionRecordFilterInput | null,
};

export type OnDeleteRecordSubscription = {
  onDeleteRecord?:  {
    __typename: "Record",
    amount: number,
    category?: string | null,
    createdAt: string,
    id: string,
    isArchived?: boolean | null,
    isEstimate?: boolean | null,
    isPending?: boolean | null,
    isRepeat?: boolean | null,
    name: string,
    payment?:  {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null,
    paymentId?: string | null,
    postDate: string,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    amount: number,
    category?: string | null,
    createdAt: string,
    futureCopies?: number | null,
    id: string,
    isEstimate?: boolean | null,
    isRepeat?: boolean | null,
    lastProcessDate?: string | null,
    name: string,
    nextDate?: string | null,
    records?:  {
      __typename: "ModelRecordConnection",
      nextToken?: string | null,
    } | null,
    repeatType?: RepeatType | null,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecordSubscriptionVariables = {
  filter?: ModelSubscriptionRecordFilterInput | null,
};

export type OnUpdateRecordSubscription = {
  onUpdateRecord?:  {
    __typename: "Record",
    amount: number,
    category?: string | null,
    createdAt: string,
    id: string,
    isArchived?: boolean | null,
    isEstimate?: boolean | null,
    isPending?: boolean | null,
    isRepeat?: boolean | null,
    name: string,
    payment?:  {
      __typename: "Payment",
      amount: number,
      category?: string | null,
      createdAt: string,
      futureCopies?: number | null,
      id: string,
      isEstimate?: boolean | null,
      isRepeat?: boolean | null,
      lastProcessDate?: string | null,
      name: string,
      nextDate?: string | null,
      repeatType?: RepeatType | null,
      type?: TransactType | null,
      updatedAt: string,
    } | null,
    paymentId?: string | null,
    postDate: string,
    type?: TransactType | null,
    updatedAt: string,
  } | null,
};
