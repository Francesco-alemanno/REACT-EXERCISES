import { useEffect, useState } from "react"

export function useWhatsapp(){
    const [error, setError]=useState('')
    const [messaggio, setMessaggio]=useState('')
    const [sent, setSent] = useState([])
    const [ricevuti, setRicevuti]=useState([])
    const [scrivendo, setScrivendo]=useState(null)
    const messaggiCasuali = [
        'Tutto bene, grazie!',
        'Come va?',
        'Sto lavorando, ci sentiamo dopo!',
        'Non c\'è nulla di nuovo, tutto tranquillo.',
        'Ciao, come stai?',
        'Spero che tu stia passando una buona giornata!',
        'A presto!',
        'Hai sentito le ultime notizie?',
        'Sto per uscire, ti scrivo dopo.',
        'Mi fai sapere quando sei disponibile?'
    ];
    const scegliMessaggioCasuale = () => {
        const randomIndex = Math.floor(Math.random() * messaggiCasuali.length);
        return messaggiCasuali[randomIndex];
    };
const handleChange= (event)=>{
    setMessaggio(event.target.value)
}
const handleSent = () => {
    if (messaggio.trim()) {  
        setSent([...sent, messaggio])  
        setMessaggio('')  
    } else {
        setError('Il messaggio non può essere vuoto')  
    }
}

const handleKeyPress= (event)=>{
    if(event.key==='Enter'){
        handleSent()
    }
}
useEffect(() => {
    if (sent.length > 0) {
        setScrivendo('sta scrivendo...')
        const timer = setTimeout(() => {
            
            setRicevuti((prevRicevuti) => [...prevRicevuti, scegliMessaggioCasuale()]);
            setScrivendo(null)
        }, 2000);
        
        return () => clearTimeout(timer);
    }
}, [sent]);
return {error, messaggio, sent,ricevuti, scrivendo, handleChange, handleSent, handleKeyPress}
}