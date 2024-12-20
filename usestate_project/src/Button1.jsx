import { useState } from 'react';

const Button1 = ()=>{
let [col,setCol]=useState('orange')

function pink(){
            setCol('pink')
        }

    return(
        <>
       <div style={{height:"100vh",width:"100vw",backgroundColor:col}}> 
        <button onClick={pink}>pink</button>
        </div>
    
        </>
    )
}
export default Button1