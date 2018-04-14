import React, { Component } from 'react';
import styled from 'react-emotion';

import { Body, H4 } from '../../styles/type';
import Combatant from '../../organisms/Combatant';

const Wrapper = styled.section({
  height: '100%',
  width: '100%',
  flex: '1 0 100%',
  display: 'flex',
  flexDirection: 'column',
});
const Header = styled.header({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});
const Main = styled.main({
    margin: '0 auto',
    width: 600,
})

export default class CombatTracker extends Component {
  render() {
    const { name, turn, combatants } = this.props;
    return (
      <Wrapper>
        <Header>
          <H4>{name}</H4>
          <Body>Turn {turn}</Body>
        </Header>
        <Main>
            {combatants.map(c => <Combatant character={c} />)}
        </Main>
      </Wrapper>
    );
  }
}
