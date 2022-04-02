import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface BalanceProps {
  $balance: number
}

const GRID_VALUES = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
`

export const BankWrapper = styled.div``

export const GridWrapper = styled.div``

export const GridHeader = styled.header`
  ${GRID_VALUES}

  padding: 16px 24px;
  font-size: 14px;
  font-weight: 700;
`

export const HeaderLabel = styled.span`
  font-size: 14px;
  text-transform: uppercase;

  &:not(:first-child) {
    text-align: right;
  }
`

export const GridBody = styled.div``

export const GridRow = styled(motion.li)`
  ${GRID_VALUES};

  padding: 12px 24px;
`

export const GridList = styled.ul`
  ${GridRow}:nth-child(odd) {
    background: ${({ theme }) => theme.colors.gallery};
  }
`

export const CustomerWrapper = styled.div`
  display: flex;
`

export const CustomerInfo = styled.div`
  margin-left: 8px;
  line-height: 1.2;
`

export const CustomerName = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
`

export const CustomerEmail = styled.a`
  color: ${({ theme }) => theme.colors.manatee};
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`

export const BalanceWrapper = styled.div<BalanceProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 300;

  ${({ $balance }) =>
    $balance < 0 &&
    css`
      color: ${({ theme }) => theme.colors.amaranth};
    `}

  ${({ $balance }) =>
    $balance === 0 &&
    css`
      color: ${({ theme }) => theme.colors.woodsmoke};
    `}

  ${({ $balance }) =>
    $balance > 0 &&
    css`
      color: ${({ theme }) => theme.colors.mountainMeadow};
    `}

  svg {
    width: 16px;
    margin-left: 4px;

    ${({ $balance }) =>
      $balance > 0 &&
      css`
        transform: rotate(180deg);
      `}

    ${({ $balance }) =>
      $balance === 0 &&
      css`
        display: none;
      `}
  }
`
