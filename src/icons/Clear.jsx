import { noop } from 'lodash';
import React from 'react';

export default ({ fill = 'black', className, size = 24, onClick = noop }) => (
  <svg
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill={fill}
    onClick={onClick}
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);
