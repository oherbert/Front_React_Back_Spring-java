import React from 'react';
import './App.css';
import Header from './Views/Header';
import Body from './Views/Body';

function App() {


  return (
    <div className="container text-center ">

        <Header name="Busca por cliente" colorStyle = "p-3 mb-2 bg-info text-white" />
        <Body type="Busca"/>

    </div>

  );
}

export default App;
