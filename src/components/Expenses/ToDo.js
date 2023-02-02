import React, { useState } from 'react';
import './ToDo.css'
import Card from "../UI/Card";
import ToDoFilter from "./ToDoFilter"
import ToDoList from "./ToDoList";



function ToDo(props) {
    const [filteredYear, setFilteredYear] = useState('2023')
    console.log('Year data in ToDo.js' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by ToDo.js')
        console.log(year + ' in ToDo.js')
        setFilteredYear(year)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })




    return (
        <Card className="expenses">
            <ToDoFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ToDoFilter>
            <ToDoList filteredExpenses={filteredExpenses}></ToDoList>
        </Card>
    )
}

export default ToDo