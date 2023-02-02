import React from "react";
import ToDoItem from "./ToDoItem";
import './ToDoList.css'

const ToDoList = (props) => {
if(props.filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>
}

return (
    <ul className="expenses-list">
        {
        props.filteredExpenses.map((expense) => {
            return <ToDoItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            ></ToDoItem>
        })
        }
        </ul>
    )
}
export default ToDoList