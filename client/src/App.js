import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <br />
          <br />
          <br />
          <Route exact path="/" component={Landing} />
          <div>
            <Route exact path="/register" component={Register}>Registrar</Route>
            <Route exact path="/login" component={Login}>Loggin dem logs</Route>
            <Route></Route>
          </div>
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
