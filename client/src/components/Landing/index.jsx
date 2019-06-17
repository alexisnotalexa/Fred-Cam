import React, { Component } from 'react';
import './styles.css';

class Landing extends Component {
  render() {
    return (
      <div className={'landing'}>
        <div className={'img-placeholder'} />
        <span className={'title'}>FRED CAM</span>
        <input className={'input'} placeholder={'Email'} />
        <input className={'input'} placeholder={'Password'} />
        <button className={'button'}>Login</button>
        <span className={'sub-text'}>Forgot your password?</span>
        <div className={'divider'} />
        <span className={'sub-text'}>Don't have an account? Sign up</span>
      </div>
    );
  }
}

export default Landing;