import React, { useState } from 'react';

import './ToDoItem.css'
import ToDoDate from "./ToDoDate";
import Card from "../UI/Card"

const ToDoItem = (props) => {

    return (
        <Card className="expense-item">
            <ToDoDate date={props.date}></ToDoDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}

export default ToDoItem