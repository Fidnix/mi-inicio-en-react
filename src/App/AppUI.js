import react from 'react';
import { TodoContext } from '../TodoContext/index.js';

import {TodoCounter} from '../TodoCounter/index.js';
import {TodoList} from '../TodoList/index.js';
import {TodoSearch} from '../TodoSearch/index.js';
import {TodoItem} from '../TodoItem/index.js';
import {CreateTodoBtn} from '../CreateTodoBtn/index.js';
import {Modal} from '../Modal/index.js';
import {TodoForm} from '../TodoForm/index.js';
import { Loading } from '../Loading/index.js';

function AppUI(){
    const {
        loading,
        error,
        totalTodos ,
        completedTodos ,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodosFunc,
        deleteTodosFunc,
        openModal,
        setOpenModal
    } = react.useContext(TodoContext);
    return (
        <react.Fragment>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <Loading/> }
            {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}

            {searchedTodos.map( todo => (
            <TodoItem
                completed={todo.completed}
                key={todo.text}
                text={todo.text}
                onComplete = {() => completeTodosFunc(todo.text)}
                onDelete = {() => deleteTodosFunc(todo.text)}
            />) ) }
        </TodoList>

        {!!openModal &&
            (
                <Modal>
                    <TodoForm/>
                </Modal>
            )
        }

            <CreateTodoBtn
                openModal = {openModal}
                setOpenModal = {setOpenModal}
            />
        </react.Fragment>
    );
}

export { AppUI };