import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Devin Altobello</h1>
      <h2>Software Engineer</h2>
      <a href="mailto:dl.altobello@gmail.com" class="email">dl.altobello@gmail.com</a>
    </>
  )
}

export default App
