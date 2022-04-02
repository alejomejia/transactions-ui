import { ContainerVariants } from './Container.animations'
import * as S from './Container.styles'

export interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <S.ContainerWrapper>
    <S.Card variants={ContainerVariants} initial="initial" animate="animate">
      {children}
    </S.Card>
  </S.ContainerWrapper>
)

export default Container
