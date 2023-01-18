import react from "react";
import './CreateTodoBtn.css';

function CreateTodoBtn({openModal, setOpenModal}){
    const onClickButton = () => {
        setOpenModal(!openModal);
        // Otra forma
        // setOpenModal(prevState => prevState);
    }
    return(
        <button
            className="CreateTodoBtn"
            onClick = {onClickButton}
        >
            { (!openModal)? "+": "-"}
        </button>
    );
}

export { CreateTodoBtn};