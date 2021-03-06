import React, { Component } from 'react';
import './styles.css';

import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';

class Landing extends Component {
  render() {
    return (
      <div className={'landing'}>
        <div className={'img-placeholder'} />
        <Logo className={'margin'} />
        <div className={'signup'}>
          <Input placeholder={'Email'} />
          <Input placeholder={'Password'} />
          <Button text={'Login'} />
          <span className={'sub-text'}>Forgot your password?</span>
          <div className={'divider'} />
          <span className={'sub-text'}>Don't have an account? Sign up</span>
        </div>
      </div>
    );
  }
}

export default Landing;