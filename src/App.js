import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

import "./App.css";
import "bulma/css/bulma.css";
import { FaCheck } from "react-icons/fa";
import { ImCheckboxUnchecked } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";


function App() {

    //Create Database and it's version
    const db = new Dexie("todoApp");
    db.version(1).stores({
        todos: "++id,task,completed"
    })



    //Get a view of all tasks in the DB
    const allTasks = useLiveQuery(() => db.todos.toArray(), []);
    if (!allTasks) return null

    //Add Task
    /*
    First we need to establish an asyncronous function that can make queries on the DB
    Every query needs to be async
    */
    const addTask = async (event) => {
        event.preventDefault();
        const taskField = document.getElementById('taskInput');

        await db.todos.add({
            task: taskField.value,
            completed: false
        })

        taskField.value = ''
    }

    const deleteTask = async(id) => db.todos.delete(id);
    
    const toggleStatus = async(id, event) => {
        await db.todos.update(id, {completed: !!event.target.checked})
    }



    return (
        <div className="container">
            <form className="section userForm is-flex is-flex-direction-column is-align-items-center" onSubmit={addTask}>
                <h1 className="title">To Do App</h1>
                <input id="taskInput" className="input" type="string" placeholder="What do you want to do today?" required />
                <button type="submit" className="button is-primary is-align-self-flex-end mt-2">Add</button>
            </form>
            <div className="section taskList">
                { allTasks?.map(item => (
                    <div>
                        <div className="block taskContainer">
                            <input type="checkbox" checked={item.completed} className="checkbox" onChange={(event)=>toggleStatus(item.id,event)}></input>
                            <span className={`task ${item.completed && 'strike-text'}`}>{item.task}</span>
                            <span className="delete" onClick={()=>deleteTask(item.id)}><FaRegTrashAlt /></span>
                        </div>
                        <hr/>

                    </div>

                ))}
            </div>
        </div>
    );
}

export default App;
