import React from 'react';
import './ToDoItem.css'
import ToDoDate from "./ToDoDate";
import Card from "../UI/Card"

const ToDoItem = (props) => {

    return (
        <Card className="todo-item">
            <ToDoDate date={props.date}></ToDoDate>
            <div className="todo-item__description">
                <h2>{props.title}</h2>
                <div className="todo-item__priority">Priority: {props.priority}</div>
            </div>
        </Card>
    )
}

export default ToDoItem
