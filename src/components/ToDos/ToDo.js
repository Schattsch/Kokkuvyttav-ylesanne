import React, { useState } from 'react';
import './ToDo.css'
import Card from "../UI/Card";
import ToDoFilter from "./ToDoFilter"
import ToDoList from "./ToDoList";



function ToDo(props) {
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by ToDo.js')
        console.log(year + ' in ToDo.js')
        setFilteredYear(year)
    }

    const filteredToDos = props.todos.filter((todo) => {
        return todo.date.getFullYear().toString() === filteredYear
    })




    return (
        <Card className="todos">
            <ToDoFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ToDoFilter>
            <ToDoList filteredToDos={filteredToDos}></ToDoList>
        </Card>
    )
}

export default ToDo