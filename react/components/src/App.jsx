import HelloWorld from "./HelloWorld"
import Messaggio from "./messaggio"
function App(){
    return (
        <div>
            <HelloWorld></HelloWorld>
            <Messaggio></Messaggio>
            <HelloWorld></HelloWorld>
        </div>
    )
}
// Se renderizzo piu volte Hello world di conseguenza me lo renderizza quante volte voglio, stessa cosa per il componente Messaggio
export default App