import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayData from './DisplayData'

import store from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
          <DisplayData />
    </>
  )
}

export default App
