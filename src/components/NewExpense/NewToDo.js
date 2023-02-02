import React from 'react';
import './NewToDo.css'
import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return(
        <div className="new-expense">
            <ToDoForm onSaveExpenseData={saveExpenseDatahandler}></ToDoForm>
        </div>
    )
}
export default NewToDo