
import "bulma/css/bulma.css";

function Modal({setModalActive, modalActive}) {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={()=>setModalActive(!modalActive)}></button>
        </div>
    )
}


export default Modal;