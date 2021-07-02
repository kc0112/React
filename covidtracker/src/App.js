import './App.css';
import React from 'react';
import Covid from './components/Covid';
import Home from './components/Home';
import CovidState from './components/CovidState';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <div className="h1" style={{ textAlign: "center" }}>Live Covid Tracker</div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/country" component={Covid} />
        <Route path="/state" component={CovidState}/>
        </Switch>
    </Router>
      </>
  );
}

export default App;
