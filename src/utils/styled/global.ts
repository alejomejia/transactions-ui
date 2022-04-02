import { createGlobalStyle } from 'styled-components'
import resetCSS from './reset'

export default createGlobalStyle`
  ${resetCSS}
  
  html,
  body {
    font-family: 'Inter', Helvetica Neue, sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.woodsmoke};
    background: ${({ theme }) => theme.colors.woodsmoke};;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.manatee};
  }
  
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255,255,255,0.3)
  }
`
