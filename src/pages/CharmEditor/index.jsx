import { withStateHandlers } from 'recompose';
import React from 'react';
import styled from 'react-emotion';

import { gracefulCraneStance } from '../../mocks/charm';
import Charm from '../../molecules/Charm';
import Page from '../../organisms/Page';

const CharmEditorWrapper = styled.div({});

const CharmEditor = ({ charms, editable, addCharm, onChange, toggleEditable }) => (
  <CharmEditorWrapper>
    <Page header={<button onClick={toggleEditable}>Toggle edit</button>}>
      {charms.map((c, idx) => (
        <Charm key={c.id || idx} {...c} editable={editable} onChange={payload => onChange({ ...c, ...payload }, idx)} />
      ))}
      <button onClick={addCharm}>Add Charm</button>
    </Page>
  </CharmEditorWrapper>
);

export default CharmEditor;
