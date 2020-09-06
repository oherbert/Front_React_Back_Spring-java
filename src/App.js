import React, {useState} from 'react';
import './App.css';

function App() {

  const [stateTextBox, setTexteBox] = useState('');
  const [cliente, setCliente] = useState('');

  const requere = (event) =>{
    event.preventDefault();
    var url = "http://localhost:8080/Cliente/"+ stateTextBox;
    fetch(url)
    .then(response => response.json())
    .then(clientResponse => setCliente(clientResponse))
    .catch(()=> console.log("Erro ao buscar"));
  }

  const handleChange = (event) =>{
    setTexteBox(event.target.value);
  }

  var nome = null;
  var id = null;
  var cpf = null;

  if(cliente != null){
    nome = cliente.nome;
    id = cliente.id;
    cpf = cliente.cpf;
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
                  placeholder="id Cliente"
                  required
                   value = {stateTextBox}
                   onChange = {handleChange}
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
              <h2 className="py-4">
                    {id}
                    <br/>
                    {nome}
                    <br/>
                    {cpf}
              </h2>
              
          </div>

      </div>

  );
}

export default App;
