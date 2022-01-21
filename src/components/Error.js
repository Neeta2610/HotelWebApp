import React, { Component } from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';

 class Error extends Component {
  render() {
    return (
      <div> <Hero>
      <Banner title="404 Error" subtitle="Page Not Found">
      <Link to='/home' className="btn-primary">return home</Link>
      </Banner>
      </Hero></div>
    );
  }
}

export default Error;
