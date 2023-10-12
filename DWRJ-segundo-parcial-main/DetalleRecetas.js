import React, { useState, useEffect } from 'react';

const DetalleReceta = ({ match }) => {
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const recetaId = match.params.id; 

    
    const fetchReceta = async () => {
      try {
        
        const response = await FetchMealById(recetaId); 
        setReceta(response); 
      } catch (error) {
        console.error('Error al obtener detalles de la receta:', error);
      }
    };

    fetchReceta();
  }, [match.params.id]);

  return (
    <div>
      <h1>Detalles de la Receta</h1>
      {receta ? (
        <div>
          <h2>{receta.nombre}</h2>
          <img src={receta.imagen} alt={receta.nombre} />
          <p>{receta.descripcion}</p>
          {/* Mostrar otros detalles de la receta si es necesario */}
        </div>
      ) : (
        <p>Cargando detalles de la receta...</p>
      )}
    </div>
  );
};

export default DetalleReceta;
