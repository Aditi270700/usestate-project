
import { useState } from 'react'
 

const Button = ()=>{

        let[col,setCol]=useState('yellow')
        
        function red(){
            setCol('red')
        }
   
    
    return(
        <>
            <div style={{height:"100vh",width: "100vw", backgroundColor:col}}>
                <button onClick={red}>red</button>
            </div>
        </>
    )
}
export default Button

