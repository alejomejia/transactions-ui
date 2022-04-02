import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'utils/styled/theme'
import GlobalStyles from 'utils/styled/global'

import Main from 'containers/Main/Main'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </StrictMode>,
  rootElement
)
