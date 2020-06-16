import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Componentes pricipales del aplicativo
 */
import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';
import Recetas from './components/recetas/Recetas';

/**
 * Rutas del aplicativo
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Inicio } />
            <Route exact path="/recetas" component={ Recetas } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
