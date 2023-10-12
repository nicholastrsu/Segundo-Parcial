import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatalogoRecetas from './components/CatalogoRecetas';
import DetalleReceta from './components/DetalleReceta';
import BusquedaRecetas from './components/BusquedaRecetas';

const App = () => {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const handleBuscarRecetas = async (busqueda) => {
    try {
      // Suponiendo que SearchMealByName devuelve los resultados de la búsqueda
      const response = await SearchMealByName(busqueda); // Reemplaza con tu función de servicio real
      setResultadosBusqueda(response); // Actualiza los resultados de la búsqueda
    } catch (error) {
      console.error('Error al buscar recetas:', error);
    }
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <CatalogoRecetas resultados={resultadosBusqueda} />}
          />
          <Route
            path="/detalle/:id"
            render={() => <DetalleReceta receta={resultadosBusqueda.find(receta => receta.id === match.params.id)} />}
          />
          <Route
            path="/busqueda"
            render={() => <BusquedaRecetas onBuscar={handleBuscarRecetas} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

