import React, {useState} from 'react';
import List from '../../util/List';

const Busca = () =>{
           
  const [stateTextBox, setTextBox] = useState('');
  const [stateCliente, setStateCliente] = useState(null);
  const [stateList, setStateList] = useState('');
  const clientes = [];
  let url;

  function updateUrl( value) {
    url = "http://localhost:8080/Cliente" + value;
  }

  const requere = (event) =>{
    event.preventDefault();
  
    fetch(url)
    .then(response => response.json())
    .then(clientResponse => setStateCliente(clientResponse))
    .catch(()=> console.log("Erro ao buscar os clientes"),setStateCliente(null));

  }

  const handleChange = (event) =>{
    setTextBox(event.target.value);
  }

  if (stateCliente != null){

    if(stateCliente.length > 1){

      let jsonResponse = Object.keys(stateCliente).map(key => ({[key]: stateCliente[key]}));

      jsonResponse.forEach( (element,i) => {
        if (element[i] != null){
          clientes.push([ element[i].id,element[i].nome,element[i].cpf ]);
          console.log(clientes);
        }
      });
      }
    
        else{
        clientes.push([ stateCliente.id,stateCliente.nome,stateCliente.cpf ]);
        }
        
         let header = ["id","Nome","CPF"];

      
    setStateList( <List header = {header} content = {clientes} />);
          
    setStateCliente(null);
  }
  return(
    <div> 
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
    {stateList}
  <div>
    <br/>               
  </div>
</div>
  );
}

export default Busca;