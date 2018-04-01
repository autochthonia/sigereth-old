import { tint } from 'polished';
import Draggable from 'react-draggable';
import React from 'react';
import styled from 'react-emotion';

import { BodyDiv } from '../../styles/type';

const MODAL_WIDTH = 200;
const Modal = styled.aside({
  width: MODAL_WIDTH,
  background: 'white',
  boxShadow: `0 2px 4px ${tint(0.15, 'black')}`,
  border: `1px solid ${tint(0.05, 'black')}`,
  '> *': {
    padding: '0 12px',
  },
});
const Header = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'move',
  borderBottom: `1px solid ${tint(0.05, 'black')}`,
  padding: 12,
});
const Main = styled.main({
    padding: 12,
});
const InvisibleButton = styled.button({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  display: 'inline-flex',
  boxSizing: 'border-box',
  cursor: 'pointer',
});

const DiceModal = ({ closeModal, numDice, label }) => (
  <Draggable handle="header" defaultPosition={{ x: window.innerWidth / 2 - MODAL_WIDTH / 2, y: 100 }}>
    <Modal>
      <Header>
        <span>Dice Roller</span>
        <InvisibleButton
          onClick={e => {
            e.stopPropagation();
            closeModal();
          }}
        >
          x
        </InvisibleButton>
      </Header>
      <Main>
        {label && <BodyDiv>{label}</BodyDiv>}
        {numDice}d10
      </Main>
    </Modal>
  </Draggable>
);

export default DiceModal;
