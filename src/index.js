import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      Hola xd
    </App>
  </React.StrictMode>
);

// // Nota: Actualmente usamos funciones en lugar de clases, pero podemos usar esta última opción de todas formas
// // Forma 1 de crear un componente
// function Componente1(props){
//   return(
//     <h1>
//       {props.text}
//     </h1>
//   );
// }

// console.log( React.createElement(Componente1, {text: "asdas"} ) );

// // Forma 2 de crear un componente
// function Componente2(){
//   return(
//     React.createElement("h1", {class: "xd"}, "Titulo", "asdas")
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
