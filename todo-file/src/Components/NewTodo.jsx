import React, { useState } from 'react';

const NewTodo = (props) => {

    const [inputvalue, setInputvalue] = useState("")
    const handleChange = value => setInputvalue(value)
    const handleButton = () => {
        props.addTodo(inputvalue)
        setInputvalue("")
    }

    return (
        <div>
            <header>My Todos</header>
            <input placeholder="Add Your Todo" onChange={e=>handleChange(e.target.value)} value={inputvalue} />
            <button onClick={handleButton} > Add New Todo </button>
        </div>
    )
}

export default NewTodo;