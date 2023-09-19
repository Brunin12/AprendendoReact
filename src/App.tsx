// Importe estilos personalizados, se houver
import "./App.css";
import React, { useState } from "react";

// Importe seus componentes
import Botao from "./components/Botao";
import AlertaDispensavel from "./components/AlertaDispensavel";

function App() {
  const [alerta, setAlerta] = useState(false);
  const cor_alerta = "primary";
  const spawnAlert = () => {
    setAlerta(true);
  };
  return (
    <div className="App p-3">
      <Botao cor="primary" clickAction={spawnAlert}>
        Mostrar Aviso
      </Botao>
      {alerta === true && (
        <AlertaDispensavel cor={cor_alerta} onClose={() => {setAlerta(false)}}>Boa Noite</AlertaDispensavel>
      )}
    </div>
  );
}

export default App;
