import React, {useState} from "react";

const Forma = (props) => {
    const { cajas, setCajas } = props;

    const[color,setColor]=useState('black');

    const onSubmit = (e) => {
    e.preventDefault();
        setCajas([...cajas,color]);
    }

    return (
    <div>
        <form onSubmit={onSubmit}  >
        <div className="form-group">
            <label htmlFor="caja">Elegir color: </label>
            <input type="color" name="caja" onChange={ (e) => setColor(e.target.value) }></input>
        </div>
        <div className="form-group">
            <input type="submit" value='Agregar Color'></input>
        </div>
        </form>
    </div>
    );
};

export default Forma;