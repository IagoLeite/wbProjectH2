import React, { useState } from "react";
import "./styles.css";
import { Cadastro } from "./Cadastro";
import { Login } from "./Login";

export default function App() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const handleCadastroClick = () => {
    setMostrarCadastro(true);
  };

  const handleLoginClick = () => {
    setMostrarLogin(true);
    setMostrarCadastro(false);
  };

  return (
    <div className="App">
      {!mostrarLogin && <h1>Bem Vindo a Página de Login</h1>}
      {!mostrarCadastro && !mostrarLogin && (
        <>
          <button onClick={handleLoginClick}>Já possuo cadastro</button>
          <button onClick={handleCadastroClick}>Não possuo cadastro</button>
        </>
      )}
      {mostrarCadastro && <Cadastro />}
      {mostrarLogin && <Login />} {}
    </div>
  );
}
