
import './App.css'
import Welcome from './Welcome'
import Age from './Age'
import Message from './Message'

function App() {

  return (
    <>

    <Welcome name='Francesco' age={38}></Welcome>
    <Age age={38}></Age>
<Message age={19}></Message>

    </>
  )
}

export default App
