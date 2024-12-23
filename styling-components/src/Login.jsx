import { useState } from "react"

export function Login (){
    const [password,setPassword]=useState('')

    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }
    return(
        <div>
            <input  onChange={handlePassword} value={password} type="password" />
            <button style={{backgroundColor: password.length <8 ? 'red' : 'green'}}>Login</button>
        </div>
    )
}