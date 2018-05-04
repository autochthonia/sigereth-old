import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const Clear = ({ fill = 'black', className, size = 24, onClick = noop }) => (
  <svg
    height={size}
    width={size}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill={fill}
    onClick={onClick}
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />

  </svg>
);

Clear.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

export default Clear;
