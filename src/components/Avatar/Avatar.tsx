import { TCustomerName } from 'utils/types/api'

import { getFirstNameCharacter } from './Avatar.utils'
import * as S from './Avatar.styles'

export interface AvatarProps {
  size?: number
  name: TCustomerName
}

const Avatar = ({ size = 40, name }: AvatarProps) => {
  const nameCharacter = getFirstNameCharacter(name)

  return (
    <S.AvatarWrapper>
      <S.Circle $size={size}>
        <S.Character>{nameCharacter}</S.Character>
      </S.Circle>
    </S.AvatarWrapper>
  )
}

export default Avatar
