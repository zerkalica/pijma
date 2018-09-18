import {KeyboardEvent, ReactNode} from 'react'
import {Mask} from '@qiwi/pijma-core'
import {MaskedInputProps} from 'react-text-mask'

export default interface PhoneFieldProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel'
  name?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  hint?: ReactNode
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  mask?: Mask
  pipe?: MaskedInputProps['pipe']
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}
