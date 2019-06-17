import React, { Component } from 'react';
import './styles.css';

import Button from '../Button';
import Input from '../Input';

class Signup extends Component {
  render() {
    return (
      <div className={'signup'}>
        <div className={'signup--container'}>
          <h1 className={'title'}>Create an account</h1>
          <Input placeholder={'Name'} />
          <Input placeholder={'Email'} />
          <Input placeholder={'Password'} />
          <Button text={'Sign Up'} />
        </div>
        <span className={'sub-text'}>Already have an account? Log in</span>
      </div>
    );
  }
}

export default Signup;