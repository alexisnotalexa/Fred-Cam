import React from 'react';
import './styles.css';

const Input = ({ onChange, placeholder, value }) => {
  return (
    <input 
      className={'input'}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;