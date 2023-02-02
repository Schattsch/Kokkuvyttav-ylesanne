import React, { useState } from "react";

import "./App.css";

import ToDo from "./components/ToDos/ToDo";
import NewToDo from "./components/NewToDo/NewToDo";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        date: new Date(2024, 0, 10),
        title: "New book",
        priority: "Low",
    },
    {
        id: "e2",
        date: new Date(2024, 0, 10),
        title: "New jeans",
        priority: "Medium",
    },
    {
        id: "e3",
        date: new Date(2023, 0, 18),
        title: "New bag",
        priority: "High",
    },
];
const App = () => {
    const [todos, setToDos] = useState(DUMMY_EXPENSES);
    const [enteredPriority, setEnteredPriority] = useState("Low");
    const addToDoHandler = (todo) => {
        console.log("In App.js");
        setToDos((previousToDos) => {
            return [...previousToDos, todo];
        });
    };
    console.log(todos);

    return (
        <div className="App">
            <NewToDo onAddToDo={addToDoHandler} priority={enteredPriority} onPriorityChange={(priority) => setEnteredPriority(priority)} />
            <ToDo todos={todos} />
        </div>
    );

};

export default App;