import React, {useState, useEffect} from "react";

const TemporizadorComponent = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time, setTime]);
    
    return <div>{time}</div>;
};

export default TemporizadorComponent;