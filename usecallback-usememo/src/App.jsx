import { FilteredList } from "./FilteredList";


function App() {
  const list = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Charlie', age: 19 },
    { id: 4, name: 'David', age: 16 }
  ];
  return (
    <>
 <FilteredList list= {list}></FilteredList>
 <Counter></Counter>
    </>
  )
}

export default App
