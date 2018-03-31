import React from 'react';
import styled from 'react-emotion';

import Charm from '../Charm';

const CharmEntryWrapper = styled.div({});

const CharmEntry = ({ charm = {}, onChange = () => {} }) => (
  <CharmEntryWrapper>
    {['name', 'cost', 'mins', 'type', 'keywords', 'duration', 'prereqs'].map(l => (
      <div>
        <label htmlFor={l}>{l}:</label>
        <input value={charm[l]} name={l} onChange={e => onChange(e.target.value, l)} />
      </div>
    ))}
    <div>
      <label htmlFor="text">text</label>
      <textarea name="text" value={charm.text} onChange={e => onChange(e.target.value, 'text')} />
    </div>
    <Charm {...charm} />
  </CharmEntryWrapper>
);

export default CharmEntry;
