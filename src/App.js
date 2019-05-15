import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicTable  col1="Head1" col2="Head2"/>
      </header>
    </div>
  );
}

export default App;

function BasicTable({col1,col2}){
  return (
    <table>
      <tr><th>{col1}</th><th>{col2}</th></tr>
      <tr><td>Some Value</td><td>Some other Value</td></tr>

    </table>
  )
}