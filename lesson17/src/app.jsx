import React from 'react';
import ReactDOM from 'react-dom';
const App = () => <h1>Hello</h1>;
const root = document.querySelector('#root');
console.log(root);
ReactDOM.render(<App />, root)