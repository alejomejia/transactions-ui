import { TCustomerName } from 'utils/types/api'

export const getFirstNameCharacter = (name: TCustomerName): string => {
  if (name === null) return '?'
  return name.split(' ')[0].charAt(0)
}
