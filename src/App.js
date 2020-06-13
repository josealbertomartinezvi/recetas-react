import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Compoentes
 */
import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Inicio } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
