import React from 'react';
import styled from 'react-emotion';

import { HEADLINE_SC_STACK } from '../../styles/type';
import Charm from '../../molecules/Charm';
import Page from '../../organisms/Page';

const CharmEditorWrapper = styled.div({});
const Button = styled.button({
  fontFamily: HEADLINE_SC_STACK,
  background: 'transparent',
  border: '1px solid gold',
  cursor: 'pointer',
  borderRadius: 2,
  margin: '0 auto',
  '@media print': { display: 'none' },
});

const CharmEditor = ({ charms = [], editable, addCharm, onChange, toggleEditable }) => (
  <CharmEditorWrapper>
    <Page
      header={
        <Button onClick={toggleEditable}>
          {editable ? 'Activate Markdown Mode' : 'Activate Edit Mode'}
        </Button>
      }
    >
      {charms.map((c, idx) => (
        <Charm key={c.id || idx} {...c} editable={editable} onChange={payload => onChange({ ...c, ...payload }, idx)} />
      ))}
      <Button css={{ width: '100%' }} onClick={addCharm}>
        Add Charm
      </Button>
    </Page>
  </CharmEditorWrapper>
);

export default CharmEditor;
