import react from "react";
import {TodoContext} from '../TodoContext/index.js';
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = react.useState('');
    const {
        addTodo,
        setOpenModal
    } = react.useContext(TodoContext);

    const onCancel = () =>{
        setOpenModal(false);
    }
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onAdd = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder='Cortar la cebolla para el almuerzo'
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button--cancel TodoForm-button"
                    onClick={onCancel}
                    >
                    Cancelar
                </button>
                <button className="TodoForm-button--add TodoForm-button"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}