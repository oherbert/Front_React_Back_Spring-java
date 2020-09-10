import React, { Component } from 'react';

 class List extends Component{

    

    render(){

        let itensHeader = [];
        let itensContent = [];
        
        return(
            <div>
            <table className="table table-striped"> 
          <thead> 
          <tr>

          {              
            this.props.header.forEach( element => {
              itensHeader.push(            
              <td>{element}</td>              
              );
            })
            }

                {itensHeader}
          
          </tr>  
          </thead>
          <tbody>

            {
            this.props.content.forEach( (element) => {
                let itens = [];
                itensContent.push(
            <tr> 

                {element.forEach(item => {
                    itens.push(<td>{item}</td>)
                })}
                
              {itens}
              
            </tr>
              );
            })
            }

            {itensContent}
            
            </tbody> 
          </table> 
        </div>
        );
    }
    

    

}

export default List;