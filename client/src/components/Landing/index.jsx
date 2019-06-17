import React, { Component } from 'react';
import './styles.css';

import Button from '../Button';

class Landing extends Component {
  render() {
    return (
      <div className={'landing'}>
        <div className={'img-placeholder'} />
        <span className={'title'}>FRED CAM</span>
        <input className={'input'} placeholder={'Email'} />
        <input className={'input'} placeholder={'Password'} />
        <Button text={'Login'} />
        <span className={'sub-text'}>Forgot your password?</span>
        <div className={'divider'} />
        <span className={'sub-text'}>Don't have an account? Sign up</span>
      </div>
    );
  }
}

export default Landing;