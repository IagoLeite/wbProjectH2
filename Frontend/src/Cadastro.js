import React, { useState } from "react";
import "./cadastro.css";

export function Cadastro() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    nome: "", // Adicione o campo nome aqui
});


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const usuario = {
      email: formData.email,
      senha: formData.senha,
      nome: formData.nome, // Certifique-se de que este campo existe no formulário
    };

    try {
      const response = await fetch('https://unearthly-broomstick-5gq5g564r5gq2q6g-8080.app.github.dev/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
        mode: 'no-cors'
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuário criado:', data);
      } else {
        console.error('Erro ao criar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
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
        Nome:
        <input
          type="name"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
