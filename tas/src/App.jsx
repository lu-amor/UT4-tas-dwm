import Card from "./components/Card/Card";
import CardTA2 from "./components/CardTA2/CardTA2";
import CardContentTA2 from "./components/CardContentTA2/CardContentTA2";
import React, { useState } from "react";
import './App.css'

// TA 1
const App = () => {
  const cardData = [
    {
      title: "task 1",
      description: "description 1",
      person: "persona 1",
      startDate: "16-09-2024",
      endDate: "25-09-2024",
    },
    {
      title: "task 2",
      description: "description 2",
      person: "persona 2",
      startDate: "27-09-2024",
      endDate: "01-10-2024",
    },
    {
      title: "task 3",
      description: "description 3",
      person: "persona 3",
      startDate: "04-10-2024",
      endDate: "09-10-2024",
    },
  ];

  return (
    <div>
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          description={data.description}
          person={data.person}
          startDate={data.startDate}
          endDate={data.endDate}
        />
      ))}
    </div>
  );
};


//TA2
/* const App = () => {
  return (
    <div className="App">
      <CardTA2>
        <CardContentTA2
          title="Task 1"
          description="descripción tarea 1"
          assignedTo="persona 1"
          startDate="15/09/2024"
          dueDate="25/09/2024"
        />
      </CardTA2>
      <CardTA2>
        <CardContentTA2
          title="Task 2"
          description="descripción tarea 2"
          assignedTo="persona 3"
          startDate="17/09/2024"
          dueDate="25/09/2024"
        />
      </CardTA2>
      <CardTA2>
        <CardContentTA2
          title="Task 3"
          description="descripción tarea 3"
          assignedTo="persona 1"
          startDate="15/09/2024"
          dueDate="29/09/2024"
        />
      </CardTA2>
    </div>
  );
}
 */

//TA3
/* function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingrese texto"
      />
      {}
      <p>El texto es: {inputValue}</p>
    </div>
  );
} */

export default App;
