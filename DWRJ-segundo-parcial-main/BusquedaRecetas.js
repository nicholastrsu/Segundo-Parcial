import React, { useState } from 'react';

const BusquedaRecetas = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBuscar(busqueda);
  };

  return (
    <div>
      <h2>Búsqueda de Recetas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={handleBusquedaChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default BusquedaRecetas;
