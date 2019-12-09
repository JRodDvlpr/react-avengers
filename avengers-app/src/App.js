import React from 'react';
import './App.css';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div>
      <Link to="/">Home</Link>
      </div>
      <div>
      <Link to="/avengers">Avengers List</Link>
      </div>

      <Route exact path='/' component={Home} />
      <Route exact path='/avengers' component={AvengersList} />

    </div>
  );
}

export default App;
