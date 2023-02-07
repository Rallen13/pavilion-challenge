import * as React from 'react';
import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <button className="button next-button" onClick={onClick} data-cy="next-button">
      Next
    </button>
  );
};

export default Button;
