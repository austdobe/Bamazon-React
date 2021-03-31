import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import NoMatch from './pages/noMatch';
import Login from './pages/login'
import History from './pages/history'
import Cart from './pages/cart'

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
          <Route exact path='/login' component={Login} />
          <Route exact path='/history' component={History}/>
          <Route exact path='/cart' component={Cart}/>
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
