import React, { useState } from "react";
import "./login.css";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    nome: "",
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
      nome: formData.nome, // Adicione um campo para o nome se necessário
    };
  
    try {
      const response = await fetch('https://spidery-fishsticks-4j649wvv79hwwq-8080.app.github.dev/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
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
          required
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
