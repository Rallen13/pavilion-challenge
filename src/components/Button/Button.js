import * as React from 'react';
import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <button className="button next-button" onClick={onClick}>
      Next
    </button>
  );
};

export default Button;
