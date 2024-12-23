import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function Hello(){
    const language=useContext(LanguageContext)
    return(

        <h2>{language==='en' ? 'Hello, world' : 'Ciao, mondo'}</h2>
    )
}