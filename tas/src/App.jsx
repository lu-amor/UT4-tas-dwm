import Card from "./components/Card/Card";
import CardTA2 from "./components/CardTA2/CardTA2";
import CardContentTA2 from "./components/CardContentTA2/CardContentTA2";
import InputComponentTA3 from "./components/Input/InputComponentTA3";
import CalculatorTA4Component from "./components/CalculatorTA4/CalculatorTA4Component";
import MagicTextComponent from "./components/MagicTextTA5/MagicTextComponent.jsx";
import ListInputComponent from "./components/ListInputTA6/ListInputComponent.jsx";
import React, { useState, useEffect } from "react";
import ApiInteractorComponent from "./components/InteracciónApiTA10/ApiInteractorComponent.jsx";
import TemporizadorComponent from "./components/TemporizadorTA11/TemporizadorComponent.jsx";
import './App.css'

// TA 1
/* const App = () => {
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
}; */


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
/* const App = () => {

  return (
    <InputComponentTA3 />
  );
} */

//TA4, TA9
/* const App = () => {

  return (
    <CalculatorTA4Component />
  );
} */

//TA5
/* const App = () => {

  return (
    <div>
      <MagicTextComponent />
    </div>
  );
} */

//TA6, TA7, TA8
/* const App = () => {

    return (
      <div>
        <ListInputComponent />
      </div>
    );
  } */

//TA10
/* const App = () => {
  return (
    <div>
      <ApiInteractorComponent />
    </div>
  );
} */

//TA11
const App = () => {
  const [time, setTime] = useState(0);

  return (
    <>
      <TemporizadorComponent time={time} setTime={setTime} />
    </>
  );
};

export default App;
