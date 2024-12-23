
import './App.css'
import { Colors } from './Colors';

function App() {
  const colorList = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Blue' },
    { id: 3, name: 'Green' }
  ];
  return (
    <>
    <Colors colors={colorList}></Colors>
    </>
  )
}

export default App
