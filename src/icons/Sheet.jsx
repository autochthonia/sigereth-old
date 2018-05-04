import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const Sheet = ({ fill = 'black', className, size = 24, onClick = noop, css }) => (
  <svg
    height={size}
    width={size}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    fill={fill}
  >
    <g transform={`translate(0,0) scale(${size / 512})`} style={{ touchAction: 'none' }}>
      <path
        d="M210.28 18.344c-21.362 43.312-84.904 72.3-146.968 101.78L181.22 156.94 54.312 142.5c28.592 58.053 71.69 113.348 120.968 157.75l99.314 29.906L179 323.312c-35.158 32.766-95.2 70.74-161.5 91.782 88.447 40.53 161.28 46.956 280.344 77.25C378.36 453.12 415.57 425.644 470.094 382l-149.25-42.438 147.47 18.938c-49.763-45.25-89.572-102.69-115.47-161.438L227.53 165.125l141.064 13.594c55.096-20.42 85.08-49.28 124.53-102.282-97.707-20.988-177.93-45.69-282.843-58.094z"
      />
    </g>
  </svg>
);

Sheet.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

export default Sheet;
