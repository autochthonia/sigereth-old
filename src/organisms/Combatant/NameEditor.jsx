import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class NameEditor extends Component {
  onChange = e => {
    const value = e.target.value;
    this.props.onChange(value, 'name');
  };

  render() {
    return (
      <input
        className={this.props.className}
        css={{
          width: 'auto',
          background: 'transparent',
          border: 'none',
          borderBottom: `1px solid white`,
          ':focus': {
            border: 'none',
            appearance: 'none',
          },
        }}
        value={this.props.name}
        onChange={this.onChange}
      />
    );
  }
}

NameEditor.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
