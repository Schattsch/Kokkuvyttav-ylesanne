import './ToDoDate.css'

function ToDoDate(props) {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear()

    return (
        <div className="todo-date">
            <div className="todo-date__month">{month}</div>
            <div className="todo-date__day">{day}</div>
            <div className="todo-date__year">{year}</div>
        </div>
    )
}

export default ToDoDate