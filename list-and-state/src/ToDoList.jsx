import { useState } from "react";

export function ToDoList() {
  const [todos, setToDos] = useState([]);
  const [inputValue, setInputvalue] = useState('');

  const addToDos = () => {
    if (inputValue) {
      setToDos([...todos, inputValue]);
      setInputvalue('');
    }
  };

  const resetToDos = () => {
    setToDos([]);
  };

  const removeToDo = (index) => {
    setToDos(todos.filter((x, i) => i !== index));
  };

  return (
    <div>
      <h1>To do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputvalue(event.target.value)}
      />
      <button onClick={addToDos}>Aggiungi</button>
      <button onClick={resetToDos}>Reset</button>
      <ul>
        {todos.map((x, index) => (
          <li key={index}>
            {x}
            
            <button onClick={() => removeToDo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
