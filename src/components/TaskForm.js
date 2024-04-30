import { db } from "./DexieDB";
import "bulma/css/bulma.css";
const TaskForm = () => {

    const addTask = async (event) => {
        event.preventDefault();
        const taskField = document.getElementById('taskInput');

        await db.todos.add({
            task: taskField.value,
            completed: false
        })

        taskField.value = ''
    }


    return (
        <form className="section userForm is-flex is-flex-direction-column is-align-items-center" onSubmit={addTask}>
            <h1 className="title">To Do App</h1>
            <input id="taskInput" className="input" type="string" placeholder="What do you want to do today?" required />
            <button type="submit" className="button is-primary is-align-self-flex-end mt-2">Add</button>
        </form>
    )
}

export default TaskForm;