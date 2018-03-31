import { css } from 'emotion';
import React from 'react';

import { storiesOf } from '@storybook/react';

import { wdcEvos } from '../../mocks/charm';
import Charm from '../../molecules/Charm';
import Page from '.';

storiesOf('organisms/Page', module).add('tree', () => (
  <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
    <Page>{wdcEvos.map(c => <Charm {...c} key={c.name} />)}</Page>
  </div>
));
