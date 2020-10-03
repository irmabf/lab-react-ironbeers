import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BeerList from './components/beerlist/BeerList';
import Header from './components/header/Header';
import NewBeer from './components/newbeer/NewBeer';
import RandomBeer from './components/randombeer/RandomBeer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BeerList />
          </Route>
          <Route path="/random">
            <RandomBeer />
          </Route>
          <Route path="/new">
            <NewBeer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
