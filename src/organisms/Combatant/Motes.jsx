import { Tooltip } from 'react-tippy';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import NumberInput from '../../atoms/NumberInput';

export default class Motes extends Component {
  render() {
    return (
      <Tooltip title={`${this.props.type} Motes`}>
        <span>
          <NumberInput min="0" onChange={this.props.onChange} value={this.props.temp} name={this.props.name} />
          <span>{this.props.permanent !== undefined && `/${this.props.permanent}`}</span>
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
