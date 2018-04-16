import { Tooltip } from 'react-tippy';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Motes extends Component {
  render() {
    return (
      <Tooltip title={`${this.props.type} Motes`}>
        <span>
          {this.props.temp}
          {this.props.permanent !== undefined && `/${this.props.permanent}`}
        </span>
      </Tooltip>
    );
  }
}

Motes.propTypes = {
  type: PropTypes.oneOf(['Personal', 'Peripheral']).isRequired,
  temp: PropTypes.number.isRequired,
  permanent: PropTypes.number,
};
