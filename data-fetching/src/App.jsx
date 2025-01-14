
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GitHubUsers } from './GitHubUsers'

function App() {

  return (
    <>
  <BrowserRouter>
      <h1>GitHub User Search</h1>
      <GitHubUsers></GitHubUsers>
      <Routes>
        <Route path='/users' element={<GitHubUsers></GitHubUsers>}></Route>
      </Routes>
    </BrowserRouter>  
    
    
      </>
  )
}

export default App
