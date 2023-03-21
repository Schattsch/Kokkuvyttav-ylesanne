import './App.css'
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTasks/NewTask";
import React, {useState} from "react";

const DUMMY_TASKS = [
    {
        id: 'e1',
        date: new Date(2023, 12, 11),
        title: "Eat breakfast",
        priority: 4
    },
    {
        id: 'e2',
        date: new Date(2023, 3, 5),
        title: "Do homework",
        priority: 1
    }
]

const App = () => {
    const [currentPriority, setCurrentPriority] = useState(0)
    const [tasks, setTasks] = useState(DUMMY_TASKS)
    const addTaskHandler = (task) => {
        console.log("Received in App.js")
        setTasks((previousTasks) => {
            return [task, ...tasks]
        })
    }

    const changePriorityHandler = (priority) => {
        setCurrentPriority((previousPriority) => {
            return priority
        })
    }
    return (
        <div className="App">
            <NewTask onAddTask={addTaskHandler}></NewTask>
            <Tasks onChangePriority={changePriorityHandler} tasks={tasks} currentPriority={currentPriority}/>
        </div>
    )
}

export default App