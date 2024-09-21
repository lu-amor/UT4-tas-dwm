import React, { useState, useRef } from 'react';

const ListInputComponent = () => {
    const [list, setList] = useState([]);
    const inputRef = useRef();

    const addToList = () => {
        setList([...list, inputRef.current.value]);
        inputRef.current.value = "";
    };

    const removeFromList = (index) => {
        setList([...list.slice(0, index), ...list.slice(index + 1)]);
    };

    const editItem = (index) => {
        const newValue = prompt("Enter new value");
        if (newValue) {
            setList(list.map((item, i) => (i === index ? newValue : item)));
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={addToList}>Add to list</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => editItem(index)}>🖊️</button> <button onClick={() => removeFromList(index)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListInputComponent;