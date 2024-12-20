
import { useState } from 'react'
import Button from './Button.jsx'
import Button1 from './Button1.jsx'

function App() {
  let[count,setCounter] = useState(0)

  function add(){
    setCounter(count+1)
  }
  function subtract(){
    if(count>0){
   setCounter(count-1)
    }
    
  }
  return (
    <>
     <h1>{count}</h1>
     <button onClick={add}>Increment</button>
     <button onClick={subtract}>Decrement</button>
     <Button />
     <Button1/>
    </>
  )
}

export default App
