import { ITransaction } from 'utils/types/api'

const transactionToNumber = (transaction_amount: string): number => {
  const amount = transaction_amount.replace('$', '')
  return Number(amount)
}

export const filterTransactions = (data: ITransaction[]) => {
  // remove from the list entries with no customer name or account type
  const filter1 = data
    .filter((transaction) => transaction.customer_name !== null)
    .filter((transaction) => transaction.account_type !== null)

  // turn transactions from string to number
  const filter2 = filter1.map((transaction) => {
    const { transaction_amount } = transaction

    return {
      ...transaction,
      transaction_amount: transactionToNumber(transaction_amount),
    }
  })

  // make groups based on customer ids
  const customer_ids = filter2.map((item) => item.customer_id)
  const unique_ids = [...new Set(customer_ids)]
  const dataByCustomerId = unique_ids.map((id) =>
    filter2.filter((input) => input.customer_id === id)
  )

  // make new array with only neccesary data
  const result = dataByCustomerId.map((group) => {
    const customer_id = group[0].customer_id
    const customer_name = group[0].customer_name
    const customer_email = group[0].customer_email

    const checkingTransactions = group
      .filter(
        (transaction) =>
          transaction.account_type === 'checking' &&
          transaction.transaction_amount
      )
      .map((transaction) => transaction.transaction_amount)

    const savingsTransactions = group
      .filter(
        (transaction) =>
          transaction.account_type === 'savings' &&
          transaction.transaction_amount
      )
      .map((transaction) => transaction.transaction_amount)

    const checkingTotal = checkingTransactions.reduce(
      (acc, curr) => acc + curr,
      0
    )

    const savingsTotal = savingsTransactions.reduce(
      (acc, curr) => acc + curr,
      0
    )

    const checking_balance = Number(checkingTotal.toFixed(2))
    const savings_balance = Number(savingsTotal.toFixed(2))

    const total_balance = Number(
      (checking_balance + savings_balance).toFixed(2)
    )

    return {
      customer_id,
      customer_name,
      customer_email,
      checking_balance,
      savings_balance,
      total_balance,
    }
  })

  return result
}

export const formatTotals = (total: number) => {
  const formatTotal = total === 0 ? total.toString() : total.toFixed(2)

  if (total >= 0) return `$${formatTotal}`

  const negativeTotal = formatTotal.replace('-', '')

  if (total < 0) return `-$${negativeTotal}`
}
