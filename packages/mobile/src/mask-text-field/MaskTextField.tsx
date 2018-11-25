import React, {ReactNode, SFC} from 'react'
import {Mask} from '@qiwi/pijma-core'

import {
  styled,
  TextFieldControl,
  MaskInput,
  InputField,
} from '@qiwi/pijma-core'

import MaskTextFieldProps from './MaskTextFieldProps'

const digits = [/\d/, /[0-9]/, /0/, /1/, /2/, /3/, /4/, /5/, /6/, /7/, /8/, /9/].map(r => r.toString())

const isMaskDigital = (mask: Mask): boolean => {
  if (!Array.isArray(mask)) {
    return false
  }
  return mask
    .filter(s => s instanceof RegExp)
    .map(r => r.toString())
    .every(s => digits.includes(s))
}

interface TextFieldStyledProps {
  focused: boolean
  value: string
  disabled?: boolean
  placeholder?: string
  hint?: ReactNode
  error?: ReactNode
}

const TextFieldStyled = styled.div<TextFieldStyledProps>((props) => ({
  width: '100%',
  [MaskInput.toString()]: {
    color: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : (
        undefined
      )
    ),
    borderBottom: (
      props.disabled ? (
        `1px dotted ${props.theme.color.gray.dark}`
      ) : props.error ? (
        `2px solid ${props.theme.color.error}`
      ) : props.focused ? (
        `2px solid ${props.theme.color.brand}`
      ) : (
        undefined
      )
    ),
    paddingRight: props.hint ? 28 : undefined,
  },
}))

const MaskTextField: SFC<MaskTextFieldProps> = (props) => (
  <TextFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    children={(renderProps) => (
      <TextFieldStyled
        focused={renderProps.focused}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        hint={props.hint}
        error={props.error}
      >
        <InputField
          title={props.title}
          active={renderProps.focused || !!props.value || !!props.placeholder}
          padded={!!props.hint}
          input={(
            <MaskInput
              type={props.type !== undefined ? props.type : isMaskDigital(props.mask) ? 'tel' : 'text'}
              value={props.value}
              name={props.name}
              autoComplete={props.autoComplete ? 'on' : 'off'}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              disabled={props.disabled}
              maxLength={props.maxLength}
              mask={props.mask}
              pipe={props.pipe}
              guide={false}
              keepCharPositions={!!props.pipe}
              placeholderChar={'\u2000'}
              onChange={renderProps.onChange}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onBlur}
              onKeyDown={renderProps.onKeyDown}
              onKeyUp={renderProps.onKeyUp}
              aria-labelledby={props.title}
            />
          )}
          hint={props.hint}
          error={props.error}
          help={props.help}
          action={props.action}
        />
      </TextFieldStyled>
    )}
  />
)

MaskTextField.defaultProps = {
  tabIndex: 0,
}

export default MaskTextField