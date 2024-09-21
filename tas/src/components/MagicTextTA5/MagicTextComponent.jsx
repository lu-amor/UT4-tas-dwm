import { useState } from "react";

const MagicTextComponent = () => {
    const [text, textAppear] = useState(true);

    const onClickHandler = () => {
        textAppear(!text);
    };

    return (
        <div className="App">
            {text && <span>Text appears and disappears</span>}
            <button onClick={onClickHandler}>Click me</button>
        </div>
    );
};

export default MagicTextComponent;