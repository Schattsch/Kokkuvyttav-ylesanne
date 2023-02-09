import React, { useState } from 'react';
import './ToDo.css'
import Card from "../UI/Card";
import ToDoFilter from "./ToDoFilter";
import ToDoList from "./ToDoList";

function ToDo(props) {
    const [filteredPriority, setFilteredPriority] = useState('All');

    const filterChangeHandler = (priority) => {
        console.log('Filter change handled by ToDo.js');
        console.log('priority:', priority);
        setFilteredPriority(priority);
    };

    const filteredToDos = props.todos.filter((todo) => {
        if (filteredPriority === 'all') {
            return true;
        }
        return todo.priority.toLowerCase() === filteredPriority.toLowerCase();
    });


    return (
        <Card className="todos">
            <ToDoFilter selected={filteredPriority} onChangeFilter={filterChangeHandler} />
            <ToDoList filteredToDos={filteredToDos} />
        </Card>
    );
}

export default ToDo;
