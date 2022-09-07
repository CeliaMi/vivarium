import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Portada from './components/portada';
import Footer from './components/footer';
import Bloque3 from './components/bloque3/bloque3';
import Catalogo from './components/catalogo';
import './index.css';
import './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();