import { Tooltip } from 'react-tippy';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import NumberInput from '../../atoms/NumberInput';

export default class Motes extends Component {
  state = {
    ctrlKey: false,
  };

  componentWillMount() {
    window.addEventListener('keydown', e => {
      if (e.ctrlKey) {
        this.setState({
          ctrlKey: true,
        });
      }
    });
    window.addEventListener('keyup', e => {
      if (e.ctrlKey) {
        this.setState({
          ctrlKey: false,
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  _onChange = (newValue, name, e) => {
    const currentlyOverMax = this.props.temp > this.props.permanent;
    if (this.props.permanent && newValue > this.props.permanent && !currentlyOverMax && !this.state.ctrlKey) {
      return this.props.onChange(this.props.permanent, name);
    }
    return this.props.onChange(newValue, name);
  };

  render() {
    return (
      <Tooltip title={`${this.props.type} Motes`}>
        <span>
          <NumberInput min="0" onChange={this._onChange} value={this.props.temp} name={this.props.name} />
          <span>{this.props.permanent && `/${this.props.permanent}`}</span>
        </span>
      </Tooltip>
    );
  }
}

Motes.propTypes = {
  type: PropTypes.oneOf(['Personal', 'Peripheral']).isRequired,
  temp: PropTypes.number.isRequired,
  permanent: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Motes.defaultProps = {
  permanent: null,
};
