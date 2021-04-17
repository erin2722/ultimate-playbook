import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './containers/Home';
import LearnHome from './containers/LearnHome';
import LearnPlay from './containers/LearnPlay';
import Quiz from './containers/Quiz';
import Glossary from './containers/Glossary';
import EndQuiz from './containers/EndQuiz';

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
      <Router basename="/ultimate-playbook">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/learn' component={LearnHome} />
            <Route path='/learn/:id' component={LearnPlay} />
            <Route exact path='/quiz'>
              <Quiz correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} />
            </Route>
            <Route exact path='/quiz-end'>
              <EndQuiz correctAnswers={correctAnswers} />
            </Route>
            <Route exact path='/glossary' component={Glossary} />
        </Switch>
      </Router>
  );
}

export default App;
