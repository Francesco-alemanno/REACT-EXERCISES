import { useState } from "react"
import { useWhatsapp } from "./useWhatsapp"

export function Whatsapp(){

const {error, messaggio, sent,ricevuti,scrivendo, handleChange, handleSent, handleKeyPress}=useWhatsapp()

console.log(sent)

    return(
        <div className="chat-container">
         <div className="utente">
         <h1>Carlo</h1>
         {scrivendo && (<p>{scrivendo}</p>)} 
            </div>   
        
        
        <div className="messaggi-inviati">
             
            {sent.map((msg, index) => (
                <p className="inviati" key={index}>{msg}</p>
            ))}

            


        </div>
        <div className="messaggi-ricevuti">
        {sent && (ricevuti.map((msg, index)=>(
                <p className="ricevuti" key={index}>{msg}</p>
            )))}
        </div>
        <input 
            type="text" 
            value={messaggio} 
            onChange={handleChange} 
            placeholder="scrivi il messaggio" 
            onKeyDown={handleKeyPress}
        />
        <button onClick={handleSent}>✔️</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mostra l'errore se presente */}
    </div>
      
    )
}