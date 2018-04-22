import { toNumber } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class NumberInput extends Component {
  _parseValue = value => {
    const number = toNumber(value);
    if (isNaN(number)) return 0;
    if (number > 999) return 999;
    if (number < -99) return -99;
    return number;
  };

  onChange = e => {
    const value = this._parseValue(e.target.value);
    this.setState({ value }, () => {
      this.props.onChange(toNumber(value), this.props.name);
    });
  };

  onKeyDown = e => {
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
    switch (e.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        return;
      case 'ArrowUp':
      case 'ArrowDown':
        const modifier = e.key === 'ArrowUp' ? 1 : -1;
        switch (true) {
          case e.ctrlKey:
            e.preventDefault();
            this.props.onChange(toNumber(this.props.init) + 5 * modifier, 'init');
            return;
          default:
        }
        return;
      case 'Backspace':
      case 'Delete':
      case 'Tab':
        return;
      default:
        console.debug(`Blocking key: '${e.key}'`);
        e.preventDefault();
        return;
    }
  };

  render() {
    return (
      <input
        className={this.props.className}
        css={{
          width: '3em',
          background: 'transparent',
          border: 'none',
          borderBottom: `1px solid white`,
          ':focus': {
            border: 'none',
            appearance: 'none',
          },
        }}
        type="number"
        onKeyDown={this.onKeyDown}
        value={this.props.value}
        onChange={this.onChange}
      />
    );
  }
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
