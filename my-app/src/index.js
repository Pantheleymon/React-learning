import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const elem = <h2>Hello World!</h2>;
const elem2 = React.createElement('h2', null, 'Hello World! 2');
const buttonText = 'Отправить';
const elem3 = (
  <div className="greet">
    <form action="">
    <input type="text" />
    <button>{buttonText}</button>
    </form>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem3
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);