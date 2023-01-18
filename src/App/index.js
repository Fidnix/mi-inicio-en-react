import react from 'react';
import './App.css';
import { AppUI } from './AppUI.js';
import { TodoContext, TodoProvider} from '../TodoContext';

// const defaultTodos = [
//   {text: "cortar cebollas", completed: true},
//   {text: "desayunar", completed: false},
//   {text: "ponerse facha", completed: false}
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
