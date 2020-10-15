import React from 'react';
import './App.css';
import Cabecera from './Cabecera';
import Namelist from './Namelist';

var CompoDemo = () => (<div><h2>Componente Demo</h2></div>);

function App() {
  const props = {titulo: 'Las props en React!!!', mensaje: 'mensaje ok'};

  const myLists = ['A', 'B', 'C', 'D', 'D'];   

  return (
    <div className="App">      
        <Cabecera {...props}/>
        <CompoDemo></CompoDemo>
        <Namelist myLists={myLists}/>
        {/* 
        esto me da error
        <Namelist {...myLists}/> */}
    </div>
  );
}

export default App;
