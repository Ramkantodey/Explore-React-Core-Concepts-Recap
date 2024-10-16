import { useState } from 'react'
import './App.css'
import Post from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>React Core Concepts Recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Post></Post>

    </>
  )
}

export default App
