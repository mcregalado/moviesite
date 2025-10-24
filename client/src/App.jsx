import React from 'react'
import MainForm from './components/MainForm'

function App() {
  return (
    <div>
      <MainForm
        title="Login"
        subtitle="Please username and password to login."
        buttonText="Login"
      />
    </div>
  )
}

export default App