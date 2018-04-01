import { css } from 'emotion';
import React from 'react';

import { storiesOf } from '@storybook/react';

import { wdcEvos } from '../../mocks/charm';
import Charm from '../../molecules/Charm';
import Page from '.';
import QuickCharacter from '../../molecules/QuickCharacter';
import { bloodApe } from '../../mocks/character';

storiesOf('organisms/Page', module)
  .add('charm tree', () => (
    <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <Page>{wdcEvos.map(c => <Charm {...c} key={c.name} />)}</Page>
    </div>
  ))
  .add('QC', () => (
    <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
      <Page>
        <QuickCharacter {...bloodApe} />
      </Page>
    </div>
  ));
