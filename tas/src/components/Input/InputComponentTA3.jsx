import React, { useState } from "react";

const InputComponentTA3 = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ingrese texto"
            />
            <p>El texto es: {inputValue}</p>
        </div>
    );
};

export default InputComponentTA3;