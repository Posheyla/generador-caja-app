import Forma from './Componentes/Forma/Forma';
import Resultado from './Componentes/Resultado/Resultado';
import './App.css';
import React, {useState} from "react";

function App() {


  const [cajas,setCajas]=useState([]);

  return (
    <div className="App">
      <Forma cajas={cajas} setCajas={setCajas} />
      <Resultado info={cajas} />
      
    </div>
  );
}

export default App;
