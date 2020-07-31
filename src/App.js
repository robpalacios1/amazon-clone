import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom"
import Header from './Header';
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* This is default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* We need a REACT-ROUTER */
}


{
  /* localhost.com/ */
}


{
  /* localhost/checkout*/
}


{
  /* localhost/login*/
}

export default App;
