export enum EFetchState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type TCustomerName = string | null

export type TTransactionType = 'checking' | 'savings' | null

export interface ITransaction {
  id: number
  date: Date
  account_id: string
  account_number: number
  account_type: TTransactionType
  customer_id: number
  customer_name: TCustomerName
  customer_email: string
  transaction_amount: string
}
