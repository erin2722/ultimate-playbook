import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './containers/Home';
import Glossary from './containers/Glossary';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/glossary' component={Glossary} />
        </Switch>
      </Router>
  );
}

export default App;
