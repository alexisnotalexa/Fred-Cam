import React, { Component } from 'react';
import './styles.css';

class Logo extends Component {
  render() {
    return (
      <span className={`logo--text ${this.props.className}`}>
        FRED CAM
      </span>
    );
  }
}

export default Logo;