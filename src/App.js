import React, {useState, Component} from 'react';
import {View, Text} from 'react-dom';
import './App.css';

function App() {

  const [stateTextBox, setTexteBox] = useState('');
  const [stateCliente, setStateCliente] = useState('');
  const [stateResultado, setStateResultado] = useState(null);
  let result = [];
  
  class Cliente {
    constructor(id = null, nome = null, cpf = null){
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
    }

    toString(){
    return "Id: "+ this.id + ", Nome: " + this.nome + ", CPF: " + this.cpf;
    }
  }

  const clientes = [];
  
  const requere = (event) =>{
    event.preventDefault();

    let url = "http://localhost:8080/Clientes/" //+ stateTextBox;
    fetch(url)
    .then(response => response.json())
    .then(clientResponse => setStateCliente(clientResponse))
    .catch(()=> console.log("Erro ao buscar os clientes"));

  
    let jsonResponse = Object.keys(stateCliente).map(key => ({[key]: stateCliente[key]}));

    jsonResponse.forEach( (element,i) => {
      if (element[i] != null){
        clientes.push( new Cliente(element[i].id,element[i].nome,element[i].cpf));
      }
    });
    
    clientes.forEach(element => {
      result.push(
        <h2>
          {element.toString()}
          <br/>
        </h2>  
      );
    });

    setStateResultado(result);
  }


  const handleChange = (event) =>{
    setTexteBox(event.target.value);
  }

  return (
    <div className="container text-center ">
        <h1 className="py-5 text-uppercase"> 
          Busca por cliente 
        </h1>
            <form onSubmit = {requere}>
              <div className="form-group">
                <div className = "input-group">
                <label htmlFor="formGroupExampleInput">
                  </label>
                <input type="text" className="form-control"  
                  placeholder="Digite o id do cliente"
                  required
                   value = {stateTextBox}
                   onChange = {handleChange}
                   pattern = {["[\\d].{0,3}"]}
                />
              <span>
                <button type="submit" className = "btn btn-success" >
                  Procurar
                </button>
              </span>
              </div>
              </div>
            </form>

          <div>
            <h2>
              {stateResultado}
              <br/>
            </h2>
              
          </div>

      </div>

  );
}

export default App;
