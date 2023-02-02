import React from 'react';
import './NewToDo.css'
import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {
    const saveToDoDatahandler = (enteredToDoData) => {
        const todoData = {
            ...enteredToDoData,
            id: Math.random().toString()
        }
        props.onAddToDo(todoData)
    }

    return(
        <div className="new-todo">
            <ToDoForm onSaveToDoData={saveToDoDatahandler}></ToDoForm>
        </div>
    )
}
export default NewToDo