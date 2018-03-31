import PropTypes from 'prop-types';
import React from 'react';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'react-emotion';

import colors from '../../styles/colors';

const CharmEntryWrapper = styled.div({

});

const CharmEntry = ({ charm = {}, onChange = () => {} }) => (
  <CharmEntryWrapper>
    {['name', 'mins', 'type', 'keywords', 'duration', 'prereqs'].map(l => (
      <div>
        <label htmlFor={l}>{l}:</label>
        <input value={charm[l]} name={l} onChange={e => onChange(e.target.value, l)} />
      </div>
    ))}
    <div>
      <label htmlFor="text">text</label>
      <textarea name="text" value={charm.text} onChange={e => onChange(e.target.value, 'text')} />
    </div>
  </CharmEntryWrapper>
);

export default CharmEntry;
