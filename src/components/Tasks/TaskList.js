import React from "react";
import './TaskList.css'
import TaskItem from "./TaskItem";

const TaskList = (props) => {
    // return message, when no tasks are found
    if (props.filteredTasks.length === 0) {
        return <p className="task-list__fallback">No tasks found</p>
    }
    // otherwise map each TaskItem component to a task from the list
    return (
        <ul className="task-list">
            {props.filteredTasks.map((task) => {
                return <TaskItem
                    key={task.id}
                    title={task.title}
                    priority={task.priority}
                    date={task.date}></TaskItem>
            })}
        </ul>
    )
}
export default TaskList