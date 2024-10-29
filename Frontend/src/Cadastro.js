import React, { useState } from "react";
import "./cadastro.css";

export function Cadastro() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.senha !== formData.confirmaSenha) {
      alert("As senhas não coincidem");
      return;
    }

    fetch("https://sua-api/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao cadastrar");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cadastro realizado com sucesso:", data);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirmar Senha:
        <input
          type="password"
          name="confirmaSenha"
          value={formData.confirmaSenha}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
