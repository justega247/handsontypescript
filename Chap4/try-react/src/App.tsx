import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AnotherScreen from './AnotherScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/another" component={AnotherScreen}></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
