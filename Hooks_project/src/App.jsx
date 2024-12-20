import { useState } from 'react'
import Click from "./Click.jsx"

function App() {
  let [h,setH] = useState(false)
  let p =''
  
    if(h){
      p=<h1>This is now</h1>
    }
    else{
      p=''
    }


  return (
    <>
      <button onClick={()=>setH(true)}>Show</button>
      <button onClick={()=>setH(false)}>Hide</button> 
      <button onClick={()=>setH(!h)}>Show</button>
      {p}
      <Click/>
        </>
  )

}
export default App