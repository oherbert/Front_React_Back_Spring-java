import React, {useState} from 'react';
import './App.css';
import Cliente from './entities/Cliente'

function App() {

  const [stateTextBox, setTexteBox] = useState('');
  const [stateCliente, setStateCliente] = useState(null);
  const [stateResultado, setStateResultado] = useState('');
  const clientes = [];
  let result = [];
  let url;

  function updateUrl( value) {
    url = "http://localhost:8080/Cliente" + value;
    console.log(url);
  }

  const requere = (event) =>{
    event.preventDefault();
  
    fetch(url)
    .then(response => response.json())
    .then(clientResponse => setStateCliente(clientResponse))
    .catch(()=> console.log("Erro ao buscar os clientes"),setStateCliente(null));

  }

  const handleChange = (event) =>{
    setTexteBox(event.target.value);
  }

  if (stateCliente != null){

    if(stateCliente.length > 1){
      
      let jsonResponse = Object.keys(stateCliente).map(key => ({[key]: stateCliente[key]}));

      jsonResponse.forEach( (element,i) => {
        if (element[i] != null){
          clientes.push( new Cliente(element[i].id,element[i].nome,element[i].cpf));
        }
      });
      }
    
        else{
        clientes.push( new Cliente(stateCliente.id,stateCliente.nome,stateCliente.cpf));
        }

      clientes.forEach(element => {
        result.push(
          <h2>
            {element.toString()}
            <br/>
          </h2>  
        );
    });
    setStateResultado(result);
    setStateCliente(null);
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
                  <button type = "submit" className = "btn btn-success" onClick = { () =>(updateUrl( '/'+stateTextBox))}>
                    Procurar
                  </button>
                </span>
              </div>
              </div>
            </form>

            <div>
              <form onSubmit = {requere}>
                <button  type="submit" className = "btn btn-success" onClick = { ()=> (updateUrl('s'))}>
                  Listar Todos
                </button>
                </form>
         </div>

          <div>
              {stateResultado}                
          </div>

      </div>

  );
}

export default App;
