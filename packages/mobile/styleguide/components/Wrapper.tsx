import React, {FC} from 'react'

import {themes, reset, fonts, injectGlobal, ThemeProvider} from '@qiwi/pijma-core'

injectGlobal(fonts, reset, {
  body: {
    // fontFamily: themes.orange.font.family,
    // fontWeight: 300,
    // lineHeight: 1,
  },
})

const Wrapper: FC = (props) => (
  <ThemeProvider theme={themes.orange}>
    {props.children}
  </ThemeProvider>
)

export default Wrapper
