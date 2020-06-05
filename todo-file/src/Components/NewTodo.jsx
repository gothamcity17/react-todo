import React, { useState } from 'react';

const NewTodo = (props) => {

    const [inputvalue, setInputvalue] = useState("")
    const handleChange = value => setInputvalue(value)
    const handleButton = () => {
        props.addTodo(inputvalue)
        setInputvalue("")
    }
    //const clearAll = ()

    return (
        <div>
            <input placeholder="Add Your Todo" onChange={e=>handleChange(e.target.value)} value={inputvalue} />
            <button onClick={handleButton} > Add New Todo </button>
            <button> Clear All </button>
        </div>
    )
}

export default NewTodo;