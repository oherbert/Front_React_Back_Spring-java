import React, { Component } from 'react';

// Recebe um Json como entrada 


 class List extends Component{  
    render(){

    const content = [];
    let header = [];
  
    if(this.props.json.length > 1){
        this.props.json.map( head =>  content.push(head));
        this.props.json.map( title => Object.keys(title).map(item => header.push(item.toUpperCase())));
        const filter = new Set(header);
        header = [...filter]; 
    }
        else{
          Object.keys(this.props.json).map( title => header.push(title.toUpperCase()));
          content.push(this.props.json);
      }

      // O cabeçalho da lista 
        const itensHeader = header.map((item) =>
        <td key = {item}>
          {item}
        </td>
        ); 

        // O corpo da lista 
        const itensContent = content.map( item =>
          <tr key = {item}>
              {
              Object.keys(item).map( subItem =>
              <td key = {item[subItem]}>
                  {item[subItem]}
              </td>
              )
              }
          </tr>
        );

        return(
            <div>
            <table className="table table-striped"> 
          <thead> 
          <tr>
                {itensHeader}
          </tr>  
          </thead>
          <tbody>
            {itensContent}
            </tbody> 
          </table> 
        </div>
        );
    }
}

export default List;