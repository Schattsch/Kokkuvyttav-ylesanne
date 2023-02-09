import React, { useState } from "react";

import "./App.css";

import ToDo from "./components/ToDos/ToDo";
import NewToDo from "./components/NewToDo/NewToDo";

const DUMMY_TODOS = [
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
    const [todos, setToDos] = useState(DUMMY_TODOS);
    const [enteredPriority, setEnteredPriority] = useState("All");
    const addToDoHandler = (todo) => {
        console.log("In App.js");
        setToDos((previousToDos) => {
            return [...previousToDos, todo];
        });
    };
    console.log(todos);

    const handlePriorityChange = (priority) => {
        setEnteredPriority(priority);
    }

    return (
        <div className="App">
            <NewToDo onAddToDo={addToDoHandler} priority={enteredPriority} onPriorityChange={handlePriorityChange} />
            <ToDo todos={todos} enteredPriority={enteredPriority} />
        </div>
    );
};

export default App;