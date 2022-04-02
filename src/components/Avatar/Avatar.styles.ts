import styled from 'styled-components'

interface CircleProps {
  $size: number
}

export const AvatarWrapper = styled.div``

export const Circle = styled.div<CircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: ${({ theme }) => theme.colors.alto};
  border-radius: 50%;
`

export const Character = styled.span`
  color: ${({ theme }) => theme.colors.jumbo};
  text-transform: uppercase;
  font-weight: 700;
`
