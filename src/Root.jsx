import React from 'react'
import { CookiesProvider } from 'react-cookie'
import App from './App'

const Root = () => {
  return (
    <CookiesProvider>
        <App/>
    </CookiesProvider>
  )
}

export default Root;