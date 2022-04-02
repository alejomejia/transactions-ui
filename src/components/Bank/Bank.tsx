import Avatar from 'components/Avatar/Avatar'
import CircleArrowIcon from 'components/Icons/CircleArrow/CircleArrow'

import useTransactions from 'hooks/useTransactions'

import { filterTransactions, formatTotals } from './Bank.utils'
import { BankVariants } from './Bank.animations'
import * as S from './Bank.styles'

const GRID_HEADER_CELLS = [
  'Customer',
  'Checking Balance',
  'Savings Balance',
  'Total Balance',
]

const Bank = () => {
  const { fetchState, transactions } = useTransactions()

  return (
    <S.BankWrapper>
      {fetchState === 'ERROR' && (
        <p>
          Oooops! Something went wrong. Please try refreshing the page again.
        </p>
      )}
      {fetchState === 'LOADING' && <p>Skeleton should be here...</p>}
      {fetchState === 'SUCCESS' && (
        <S.GridWrapper>
          <S.GridHeader>
            {GRID_HEADER_CELLS.map((cell, index) => (
              <S.HeaderLabel key={index}>{cell}</S.HeaderLabel>
            ))}
          </S.GridHeader>
          <S.GridBody>
            <S.GridList>
              {filterTransactions(transactions).map(
                (
                  {
                    customer_id,
                    customer_name,
                    customer_email,
                    checking_balance,
                    savings_balance,
                    total_balance,
                  },
                  index
                ) => {
                  return (
                    <S.GridRow
                      key={customer_id}
                      variants={BankVariants}
                      initial="initial"
                      animate="animate"
                      custom={index}
                    >
                      <S.CustomerWrapper>
                        <Avatar name={customer_name} />
                        <S.CustomerInfo>
                          <S.CustomerName>{customer_name}</S.CustomerName>
                          <S.CustomerEmail href={`mailto:${customer_email}`}>
                            {customer_email}
                          </S.CustomerEmail>
                        </S.CustomerInfo>
                      </S.CustomerWrapper>
                      <S.BalanceWrapper $balance={checking_balance}>
                        {formatTotals(checking_balance)} <CircleArrowIcon />
                      </S.BalanceWrapper>
                      <S.BalanceWrapper $balance={savings_balance}>
                        {formatTotals(savings_balance)} <CircleArrowIcon />
                      </S.BalanceWrapper>
                      <S.BalanceWrapper $balance={total_balance}>
                        {formatTotals(total_balance)} <CircleArrowIcon />
                      </S.BalanceWrapper>
                    </S.GridRow>
                  )
                }
              )}
            </S.GridList>
          </S.GridBody>
        </S.GridWrapper>
      )}
    </S.BankWrapper>
  )
}

export default Bank
