import { useState } from "react"

export function InteractiveWelcome(){
    const [name, setName] =useState('')
    const handleChangeName= (event)=>{
        setName(event.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleChangeName} />
            <p>Welcome, {name}!</p>

        </div>
    )
}