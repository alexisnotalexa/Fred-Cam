import React from 'react';
import './styles.css';

const Button = ({ onClick, text }) => {
  return (
    <button
      className={'button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;