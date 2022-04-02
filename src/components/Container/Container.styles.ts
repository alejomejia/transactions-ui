import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContainerWrapper = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
  padding: 24px;
`

export const Card = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`
