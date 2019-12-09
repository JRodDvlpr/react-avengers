import React from 'react';
import './App.css';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/avengers' component={AvengersList} />

    </div>
  );
}

export default App;
