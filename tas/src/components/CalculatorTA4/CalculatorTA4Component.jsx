import { useState, useEffect } from "react";

const CalculatorTA4Component = () => {
    const [a, setA] = useState(1);

    useEffect(() => {
        document.title = `Valor del contador: ${a}`;
    }, [a]);

    const onClickHandler = (num) => {
        if (num === "Increase") {
            setA(a + 1);
        } else {
            setA(a - 1);
        }
    };

    return (
        <div className="App">
            <button onClick={() => onClickHandler("Decrease")}>➖</button>
            { a }
            <button onClick={() => onClickHandler("Increase")}>➕</button>
        </div>
    );
};

export default CalculatorTA4Component;
