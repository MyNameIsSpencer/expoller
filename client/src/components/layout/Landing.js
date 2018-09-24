import React, { Component } from 'react';
import LandingCentre from './LandingCentre';
import Register from '../auth/Register';

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingCentre />
        <Register />
      </div>
    )
  }

}

export default Landing;
