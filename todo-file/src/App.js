import React, { useState } from 'react';
import Display from './Components/Display';
import NewTodo from './Components/NewTodo';
import './App.css';

const App = () => {
  const [items, setItems] = useState ([])



  const addTodo = (newItem) => {
    setItems([...items, newItem ])
  };

 
  const clearAll = () => setItems([]);
  

  const deleteTodo = (id) => {
    console.log(id)
    let filtered = items.filter((item,index)=>index!==id)
    setItems(filtered)
  };
    return (
      <div>
      <NewTodo addTodo={addTodo} />
      <Display items={items} deleteTodo={deleteTodo} />
      <button onClick={clearAll}>Clear All</button>
      </div>
    )
}

  export default App