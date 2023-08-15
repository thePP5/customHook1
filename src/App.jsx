import { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';


function App() {
  const [count, setCount] = useState(0)
  
  useDocumentTitle(`${count} `)

function handleDecrement(){
  setCount(prevCount => prevCount -1);
}

function handleIncrement(){
  setCount(prevCount=> prevCount+1);
}

  return (
    <>
    <h2>Changing the page title according to the button press</h2>
    <h4>{count}</h4>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default App
