import { useState } from "react"

export function Login({onLogin}){
const [username,setUsername]=useState('')
const [password,setPasssword]=useState('')
const [checkbox,setCheckbox]=useState(false)

     const handleUsernameChange= (event)=>{
        const eventUsername=event.target.value
        setUsername(eventUsername)
     }
     const handlePasswordChange= (event)=>{
        const eventPassword=event.target.value
        setPasssword(eventPassword)
     }

     const handleCheckboxChange= (event)=>{
        const eventCheckbox=event.target.checked
        setCheckbox(eventCheckbox)
     }
     const handleReset= ()=>{
        setUsername('')
        setPasssword('')
        setCheckbox(false)

     }
    
     const handleLogin = (event) => {
        event.preventDefault(); 
        onLogin({ username, password, checkbox });
      };


    return(
        <div>
            <form action="" onClick={handleLogin}>
            <input type="text" value={username} onChange={handleUsernameChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
           <input type="checkbox" checked={checkbox} onChange={handleCheckboxChange}/>
           <button onClick={handleReset}>Reset</button>
           <button disabled={!username || !password || !checkbox} >Login</button>
           </form>
        </div>
    )
}