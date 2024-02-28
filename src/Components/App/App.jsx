import { useState } from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='layout-wrapper'>
      <Header />
      <Nav />
    </div>
    </>
  )
}

export default App
