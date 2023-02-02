import React, { useState } from 'react';
import './ToDoForm.css'
const ToDoForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredPriority, setEnteredPriority] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const priorityChangeHandler = (event) => {
        setEnteredPriority(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const todoData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            priority: enteredPriority
        }
        props.onSaveToDoData(todoData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredPriority('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-todo__controls">
                <div className="new-todo__control">
                    <label>New Task</label>
                    <input type="text"
                           onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-todo__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-18" max="2025-12-31"
                           onChange={dateChangeHandler} value={enteredDate}/>
                </div>
                <div className="new-todo__control">
                    <label>Select task priority</label>
                    <select onChange={priorityChangeHandler} value={enteredPriority}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <div className="new-todo__actions">
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}
export default ToDoForm