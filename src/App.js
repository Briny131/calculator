import React from 'react';
import logo from './logo.svg';
import './App.css';
import Btn from './button';
import ShowDock from './showDock'

function ceshi(){
  console.log('hh')
}

function App() {
  return (
    <div className='App'>
      <ShowDock />
      <div className='row'>
          <Btn value='7' click={ceshi}/>
      </div>
    </div>
  );
}

export default App;
