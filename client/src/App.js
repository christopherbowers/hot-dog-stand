import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Game from './pages/Game';
import Instructions from './pages/Instructions';
import About from './pages/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          {/* <Route path="/instructions" component={Instructions} /> */}
          {/* <Route path="/about" component={About} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
