import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
root.render(element, document.getElementById('root'));

reportWebVitals();
