import React, { useState } from "react";
import "./login.css";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://sua-api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
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
