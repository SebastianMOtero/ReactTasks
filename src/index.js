import React from 'react'; //Libreria para react
import ReactDOM from 'react-dom';  //Libreria para app web
import './index.css';  //Js permite importar css
import App from './App'; //Archivo que arranca la aplicacion
import * as serviceWorker from './serviceWorker'; //Permite funcionar la app aun sin conexion

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
