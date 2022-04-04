import React from 'react';
import './Resultado.css';

const Resultado = (props) => {

    const {info}=props;

    return (
        <div className='content'>
            { 
        info.length>0 && info.map((item,i)=><div className='caja' key={i} style={{backgroundColor:item,color:'white'}}> {item} </div>)
        }
        </div>
    );
}

export default Resultado;