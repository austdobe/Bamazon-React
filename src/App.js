import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import NoMatch from './pages/noMatch';
import login from './pages/login'
import history from './pages/history'

const styling ={
  App:{
    minHeight: '100vh'
  }
}

function App() {
  return (
    <Router>
      <div style={styling.App}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={login} />
          <Route exact path='/history' component={history}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
