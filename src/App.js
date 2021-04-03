import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import NoMatch from './pages/noMatch';
import Login from './pages/login'


const styling ={
  App:{
    minHeight: '100vh'
  },
  Nav: {
    width: '100%',
    MaxHeight: '200px'
  }
}

function App() {
  return (
    <Router style={styling.App}>
  
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='*' component={NoMatch} />
      </Switch>
    
    </Router>
  );
}

export default App;
