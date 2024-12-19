import { useState } from 'react'


function App() {
  let [h, setH] = useState(false)
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
      {p}
        </>
  )

}
export default App