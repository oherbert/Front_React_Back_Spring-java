import React, {useState} from 'react';
import List from '../../util/List';

const Busca = () =>{
           
  const [stateTextBox, setTextBox] = useState('');
  const [stateJson, setStateJson] = useState(null);
  const [stateList, setStateList] = useState('');
  let url;

  function updateUrl( value) {
    url = "http://localhost:8080/Cliente" + value;
  }

  const requere = (event) =>{
    event.preventDefault();
  
    fetch(url)
    .then(response => response.json())
    .then(clientResponse => setStateJson(clientResponse))
    .catch(()=> console.log("Erro ao buscar os clientes"),setStateJson(null));

  }

  const handleChange = (event) =>{
    setTextBox(event.target.value);
  }

  if (stateJson != null){
  
    setStateList( <List json = {stateJson} />);
          
    setStateJson(null);
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
    <br/>
    {stateList}
  <div>
    <br/>               
  </div>
</div>
  );
}

export default Busca;