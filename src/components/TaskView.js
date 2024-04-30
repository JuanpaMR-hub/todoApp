import { db } from "./DexieDB"
import { useLiveQuery } from "dexie-react-hooks";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import Modal from "./Modal"

import "bulma/css/bulma.css";
import "../styles/TaskView.css"
import { useState } from "react";



const TaskView = () => {

    const[modalActive, setModalActive] = useState(false);


    //Get a view of all tasks in the DB
    const allTasks = useLiveQuery(() => db.todos.toArray(), []);
    if (!allTasks) return null

    const deleteTask = async (id) => db.todos.delete(id);

    const toggleStatus = async (id, event) => {
        await db.todos.update(id, { completed: !!event.target.checked })
    }




    return (
        <div>
            <div className="section taskList">

                {allTasks?.map(item => (
                    <div>
                        <div className="block taskContainer">
                            <input type="checkbox" checked={item.completed} className="checkbox" onChange={(event) => toggleStatus(item.id, event)}></input>
                            <span className={`task ${item.completed && 'strike-text'}`} onClick={()=>setModalActive(!modalActive)} data-target="modal-example">{item.task}</span>
                            <span className="edit"> <MdModeEditOutline /></span>
                            <span className="delete" onClick={() => deleteTask(item.id)}><FaRegTrashAlt /></span>

                        </div>
                        <hr />
                    </div>

                ))}


            </div>
            {modalActive && (
                <Modal setModalActive={setModalActive} modalActive={modalActive}/>
            )}
        </div>

    )
}

export default TaskView;