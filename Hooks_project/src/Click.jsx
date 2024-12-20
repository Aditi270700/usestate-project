import {useState} from "react"
function App(){
let [show,setShow] = useState(false)

return(
<>
<button onClick={()=>setShow(true)}>Click here</button>
<button onClick={()=>setShow(!show)}>display</button>

{(show)?<h2>Success</h2>:""}

</>
)
} 
export default App
