import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyStore from './basic/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={MyStore}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Important Points of Redux
//Store - Redux keep, store, stock, maintain Complete Application data
//in - Store
//Reducer - It work like store manager, it is responsible to add, list,
//delete
//             data from store.
//Action - The Action describe about the type of user intraction/need
//Dispatch - After action data get tranfer from ui to store, till the
//data is
 //            between ui to store will be under dispatch status
//useSelector-it use to fetch/bring data from store to ui
//useDispatch - it use to send data from ui to store
