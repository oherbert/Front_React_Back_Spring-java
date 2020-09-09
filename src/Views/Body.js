import React from 'react';
import Busca from './typeBody/Busca';

const Body = (props) =>{

    const carregaTela = () =>{    
        if (props.type ==="Busca") return <Busca />
        else return <h2> vazio </h2>
    }
    
    return(
        carregaTela()
    );
}

export default Body;