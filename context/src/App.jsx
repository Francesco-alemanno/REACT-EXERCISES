
import { useState } from 'react'
import './App.css'
import { LanguageContext } from './LanguageContext'
import { Hello } from './Hello'

function App() {
  const [language,setLanguage]=useState('en')


  function handleSetLanguage(language){
    setLanguage(language)

  }

  return (
   <div>
  <button onClick={()=>handleSetLanguage('it')}>IT</button>
  <button onClick={()=>handleSetLanguage('en')}>EN</button>   

<LanguageContext.Provider value={language}>
  <Hello></Hello>

</LanguageContext.Provider>
</div>
    
  )
}

export default App
