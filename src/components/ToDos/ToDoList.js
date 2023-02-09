import React from "react";
import ToDoItem from "./ToDoItem";
import './ToDoList.css'

const ToDoList = (props) => {
    if(props.filteredToDos.length === 0) {
        return <p className="todos-list__fallback">No todos found.</p>
    }

    return (
        <ul className="todos-list">
            {
                props.filteredToDos.map((todo) => {
                    return <ToDoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        priority={todo.priority}
                        date={todo.date}
                    ></ToDoItem>
                })
            }
        </ul>
    )
}
export default ToDoList