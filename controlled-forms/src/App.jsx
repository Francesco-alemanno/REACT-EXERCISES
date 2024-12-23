
import './App.css'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'

function App() {
  const handleLogin = (state) => {
    console.log('User logged in with the following state:', state);
  };


  return (
    <>
   <InteractiveWelcome name='francesco'></InteractiveWelcome>
   <Login onLogin={handleLogin}></Login>
    </>
  )
}

export default App
