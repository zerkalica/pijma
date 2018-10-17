import React, {Component} from 'react'

import {MaskTextField, RadioField, CheckboxField} from '@qiwi/pijma-mobile'
import {QuestionIcon} from '@qiwi/pijma-media'
import {createNumberMask, createFilterMask, Mask} from '@qiwi/pijma-core'

interface State {
  features: string[]
  value: string
  type: undefined | 'text' | 'password' | 'tel'
  mask: Mask
}

export default class MaskTextFieldExample extends Component<{}, State> {

  public phoneMask = ['(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  public latinMask = createFilterMask(/[a-zA-Z\s-]/)
  public amountMask = createNumberMask({
    suffix: ' ₽',
    decimalLimit: 2,
    requireDecimal: true,
    integerLimit: 20,
  })

  public state: State = {
    features: ['help', 'hint', 'action'],
    value: '',
    type: undefined,
    mask: this.phoneMask,
  }

  public render() {
    return (
      <table style={{width: '100%'}}>
        <tbody>
        <tr>
          <td style={{padding: '10px'}}>
            <MaskTextField
              type={this.state.type}
              name={this.state.type}
              title={this.state.type}
              disabled={this.state.features.includes('disabled')}
              error={this.state.features.includes('error') ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.features.includes('maxLength') ? 10 : undefined}
              hint={this.state.features.includes('hint') ? <QuestionIcon/> : undefined}
              help={this.state.features.includes('help') ? 'Подсказка' : undefined}
              action={this.state.features.includes('action') ? <a href="#">action</a> : undefined}
              placeholder={this.state.features.includes('placeholder') ? 'Плейсхолдер' : undefined}
              value={this.state.value}
              mask={this.state.mask}
              onChange={(value) => this.setState({value})}
            />
          </td>
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
            <span>Type</span>
            <RadioField
              options={[{
                label: 'undefined',
                value: undefined,
              }, {
                label: 'text',
                value: 'text',
              }, {
                label: 'password',
                value: 'password',
              }, {
                label: 'tel',
                value: 'tel',
              }]}
              value={this.state.type}
              onChange={(type) => this.setState({type})}
            />
          </td>
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
            <span>Mask</span>
            <RadioField
              options={[{
                label: 'phone',
                value: this.phoneMask
              }, {
                label: 'latin',
                value: this.latinMask,
              }, {
                label: 'amount',
                value: this.amountMask,
              }]}
              value={this.state.mask}
              onChange={(mask) => this.setState({mask})}
            />
          </td>
        </tr>
        <tr>
          <td style={{padding: '10px'}}>
            <span>Opts</span>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'placeholder',
                value: 'placeholder',
              }, {
                label: 'error',
                value: 'error',
              }, {
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }, {
                label: 'action',
                value: 'action',
              }, {
                label: 'maxLength',
                value: 'maxLength',
              }]}
              values={this.state.features}
              onChange={(features) => this.setState({features})}
            />
          </td>
        </tr>
        </tbody>
      </table>
    )
  }

}