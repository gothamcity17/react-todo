import React, { useState } from 'react';

const Display = (props) => {
  return (
    <div>
      {props.items.map((item, i) => (
        <div key={i}>
          {item}
          <input type='checkbox' />
          <button onClick={() => props.deleteTodo(i)}> Delete </button>
        </div>
      ))}
    </div>
  );
};

export default Display;
