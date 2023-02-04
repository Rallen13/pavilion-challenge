import React from 'react';
import './Error.scss';

const Error = () => (
  <div role="alert" className="error-view">
    <h2 className="error-heading" data-cy="error-heading">
      Something went wrong!
    </h2>
    <img
      className="error-image"
      src="https://media.giphy.com/media/qrIsXgEdorkI/giphy.gif"
      alt="Tina Belcher says error!"
    />
  </div>
);

export default Error;
