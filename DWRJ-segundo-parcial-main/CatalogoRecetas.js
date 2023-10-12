import React, { useState, useEffect } from 'react';

const CatalogoRecetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [letra, setLetra] = useState('A'); 
  useEffect(() => {
   
    const fetchRecetas = async () => {
      try {
       
        const response = await FetchMealByFirstLetter(letra); 
        setRecetas(response); 
      } catch (error) {
        console.error('Error al obtener las recetas:', error);
      }
    };

    fetchRecetas();
  }, [letra]);

  return (
    <div>
      <h1>Catálogo de Recetas</h1>
      <div>
        <label htmlFor="letraInput">Selecciona una letra:</label>
        <input
          id="letraInput"
          type="text"
          maxLength="1"
          value={letra}
          onChange={(e) => setLetra(e.target.value.toUpperCase())}
        />
      </div>
      <ul>
        {recetas.map((receta) => (
          <li key={receta.id}>
            <img src={receta.imagen} alt={receta.nombre} />
            <div>
              <h3>{receta.nombre}</h3>
              <p>{receta.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogoRecetas;
