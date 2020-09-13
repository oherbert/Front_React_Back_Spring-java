import React, { Component } from 'react';

 class List extends Component{


    render(){

        const itensHeader = this.props.header.map((item) =>
        <td key = {item}>
          {item}
        </td>
        ); 

        const itensContent = this.props.content.map( item =>
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