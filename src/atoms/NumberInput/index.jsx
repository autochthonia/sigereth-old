import { toNumber } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class NumberInput extends Component {
  onChange = e => {
    const value = this._parseValue(e.target.value);
    this.props.onChange(value, this.props.name);
  };

  _parseValue = value => {
    const number = toNumber(value);
    if (isNaN(number)) return 0;
    if (number > 999) return 999;
    if (number < -99) return -99;
    return number;
  };

  render() {
    return (
      <input
        className={this.props.className}
        css={{
          width: '3em',
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid white',
          ':focus': {
            border: 'none',
            appearance: 'none',
          },
        }}
        type="number"
        value={this.props.value}
        onChange={this.onChange}
        min={this.props.min}
      />
    );
  }
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  min: PropTypes.number,
};

NumberInput.defaultProps = {
  className: '',
  min: null,
};
