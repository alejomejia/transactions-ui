import { useState, useEffect } from 'react'
import { EFetchState, ITransaction } from 'utils/types/api'

const useTransactions = () => {
  const [fetchState, setFetchState] = useState<EFetchState>(EFetchState.DEFAULT)
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const BASE_URL =
    'https://quietstreamfinancial.github.io/eng-recruiting/transactions.json'

  const getTransactions = async () => {
    try {
      setFetchState(EFetchState.LOADING)

      const request = await fetch(BASE_URL)
      const data: ITransaction[] = await request.json()
      setTransactions(data)

      setFetchState(EFetchState.SUCCESS)
    } catch (error) {
      setFetchState(EFetchState.ERROR)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return { fetchState, transactions }
}

export default useTransactions
