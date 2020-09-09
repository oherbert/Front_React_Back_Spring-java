import React from 'react';


const Header = (props) =>{
    return(
        <div className = {props.colorStyle}>
            <h1 className="py-6 text-uppercase"> 
                {props.name} 
            </h1>
      </div>
    );
}

export default Header;