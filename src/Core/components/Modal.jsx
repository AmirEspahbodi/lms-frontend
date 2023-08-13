import '../../../styles/modal.css'
export default function Modal(props){
    return <div className="modal" id={props.modalId} style={{top:props.modalTop+"%"}}>
        <div className="modal-exit" onClick={() => props.setModalTop(-100)}></div>
        {props.children}
    </div>
}