import React, { useState } from 'react';
import Display from './Components/Display';
import NewTodo from './Components/NewTodo';
import './App.css';

const App = () => {
  const [items, setItems] = useState ([])



  const addTodo = (newItem) => {
    setItems([...items, newItem ])
  };

 
  //const clearAll = () => {};
  

  const deleteTodo = (id) => {
    console.log(id)
    let filtered = items.filter((item,index)=>index!==id)
    setItems(filtered)
  };
    return (
      <div>
      <NewTodo addTodo={addTodo} />
      <Display items={items} deleteTodo={deleteTodo} />
      </div>
    )
}

  export default App