import react from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = react.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = react.useState('');
    const [openModal, setOpenModal] = react.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(searchValue.length < 1){
        searchedTodos = todos;
    } else{
        searchedTodos = todos.filter( todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            
            return todoText.includes(searchText);
        } )
    }

    const completeTodosFunc = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);

        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos);
    }
    
    const deleteTodosFunc = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos ,
            addTodo,
            completedTodos ,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodosFunc,
            deleteTodosFunc,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };