import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from './views/sign-in-page/sign-in-page.component';
import GamePage from './views/game-page/game-page.component';
import ScorePage from './views/score-page/score-page.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={'/'} component={SignInPage}/>
        <Route exact path={'/game'} component={GamePage}/>
        <Route exact path={'/score'} component={ScorePage}/>
      </Switch>
    </div>
  );
}

export default App;
