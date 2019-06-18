import React, { Component } from 'react';
import './styles.css';

import Button from '../Button';
import Input from '../Input';

class Signup extends Component {
  renderBackBtn = () => {
    return (
      <div className={'back-btn'}>
        <div className={'back-btn--btn'}>
          <span className={'back-btn--arrow'}>←</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={'signup'}>
        {this.renderBackBtn()}
        <div className={'signup--container'}>
          <div className={'signup--block'}>
            <h1 className={'title'}>Create an account</h1>
            <Input placeholder={'Name'} />
            <Input placeholder={'Email'} />
            <Input placeholder={'Password'} />
            <Button text={'Sign Up'} />
          </div>
          <span className={'sub-text'}>Already have an account? Log in</span>
        </div>
      </div>
    );
  }
}

export default Signup;