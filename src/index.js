import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import SubscribeCard from './Components/Card/SubscribeCard/subscribeCard';
import CreateTask from './Pages/HomePage/CreateTaskSection/createTask';
ReactDOM.render(
  <React.StrictMode>
    {/* <CreateTask /> */}
    {/* <SubscribeCard/> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
