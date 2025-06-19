import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ nombre: '', correo: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre es importante para nosotros"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={form.correo}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {submitted && (
        <div>
          <h2>¡Gracias por enviar tus datos!</h2>
          <p>Nombre: {form.nombre}</p>
          <p>Correo: {form.correo}</p>
        </div>
      )}
    </div>
  );
}

export default App;
