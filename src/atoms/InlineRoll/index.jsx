import { Portal } from 'react-portal';
import { css } from 'emotion';
import { max } from 'lodash';
import { tint } from 'polished';
import { withStateHandlers } from 'recompose';
import React from 'react';
import styled from 'react-emotion';

import D10 from '../../icons/D10';
import DiceModal from '../../molecules/DiceModal';

const InlineRollWrapper = styled.button({
  border: '1px solid transparent',
  background: 'transparent',
  display: 'inline-flex',
  flexDirection: 'row',
  lineHeight: '1em',
  '@media screen': {
    padding: 2,
    borderRadius: 5,
    cursor: 'pointer',
    transitionProperty: 'background boxShadow',
    transitionDuration: '0.3s',
    transitionDelay: '0.1s',
    borderColor: tint(0.75, 'gold'),
    boxShadow: `0 2px 2px transparent`,
    ':hover': {
      background: tint(0.5, 'gold'),
      boxShadow: `0 2px 2px ${tint(0.15, 'black')}`,
    },
  },
  '@media print': {
    padding: 0,
    svg: { display: 'none' },
  },
});

const InlineRoll = ({ dice: preformattedDice, openPortal, closePortal, portalOpen }) => {
  const dice = max([preformattedDice, 0]);
  const dicePlural = dice === 1 ? 'die' : 'dice';
  return (
    <InlineRollWrapper onClick={openPortal}>
      <D10 className={css({ height: '1em', width: 'auto', marginRight: 4 })} />
      {dice} {dicePlural}
      {portalOpen && (
        <Portal>
          <DiceModal numDice={dice} closeModal={closePortal} />
        </Portal>
      )}
    </InlineRollWrapper>
  );
};

export default withStateHandlers(
  { portalOpen: false },
  {
    openPortal: state => () => {
      console.debug('Opening InlineRoll Portal');
      return { ...state, portalOpen: true };
    },
    closePortal: state => () => {
      console.debug('Closing InlineRoll Portal');
      return { ...state, portalOpen: false };
    },
  },
)(InlineRoll);
