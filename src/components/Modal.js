import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./DexieDB";
import "bulma/css/bulma.css";


const Modal=({ setModalActive, modalActive, selectedId }) => {
    // const getTask = useLiveQuery(()=>db.todos.where('task').equals("Soy tu amigo y vengo a jugar"), [])
    const getTask = useLiveQuery(()=>db.todos.where('id').equals(selectedId).first(), [])
    console.log(getTask)


    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <h2>{getTask.task}</h2>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setModalActive(!modalActive)}></button>
        </div>
    )
}


export default Modal;