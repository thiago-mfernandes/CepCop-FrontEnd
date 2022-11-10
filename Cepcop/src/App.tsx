import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './Styles/default'
import { GlobalStyle } from './Styles/global'

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />      
      </BrowserRouter>      
    </ThemeProvider>
  )
}
