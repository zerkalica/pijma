import React, {ReactNode, SFC} from 'react'

import {
  styled,
  TextFieldControl,
  MaskInput,
  Field,
  FieldInput,
  FieldUnder,
  FieldUnderAction,
  FieldUnderError,
  FieldUnderHelp,
  FieldIcon,
} from '@qiwi/pijma-core'

import PhoneFieldProps from './PhoneFieldProps'
import FlagRU from './flags/FlagRU'
import FlagWrapper from './FlagWrapper'

interface TextFieldStyledProps {
  focused: boolean
  value: string
  disabled?: boolean
  placeholder?: string
  hint?: ReactNode
  error?: ReactNode
}

const TextFieldStyled = styled.div<TextFieldStyledProps>((props) => ({
  position: 'relative',
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

const PhoneField: SFC<PhoneFieldProps> = (props) => (
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
        <Field>
          <FieldInput>
            <MaskInput
              type="tel"
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
              aria-labelledby={props.name}
            />
            <FieldIcon>
              {props.hint}
            </FieldIcon>
          </FieldInput>
          <FieldUnder>
            {props.error ? (
              <FieldUnderError>
                {props.error}
              </FieldUnderError>
            ) : props.help ? (
              <FieldUnderHelp>
                {props.help}
              </FieldUnderHelp>
            ) : (
              null
            )}
            {props.action ? (
              <FieldUnderAction>
                {props.action}
              </FieldUnderAction>
            ) : (
              null
            )}
          </FieldUnder>
        </Field>
        <FlagWrapper>
          <FlagRU/>
        </FlagWrapper>
      </TextFieldStyled>
    )}
  />
)

PhoneField.defaultProps = {
  tabIndex: 0,
}

export default PhoneField
