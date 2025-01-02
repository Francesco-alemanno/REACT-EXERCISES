import { useState } from "react"
import { GithubUser } from "./GithubUser"
import { HookCounter } from "./HookCounter"
import { LoginForm } from "./LoginForm"
import { LocationComponent } from "./LocationComponent"


function App() {
const [username, setUsername]=useState('')
  return (
    <>
    <LoginForm></LoginForm>
      <HookCounter></HookCounter>
      <input value={username} onChange={(e) =>setUsername(e.target.value)} />
      <GithubUser></GithubUser>
      <LocationComponent></LocationComponent>
    </>
  )
}

export default App
