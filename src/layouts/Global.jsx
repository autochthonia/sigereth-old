import { injectGlobal } from 'emotion';
import React from 'react';

import watercolor from './seamless-watercolor-10.jpg';

injectGlobal(
  `@import url('https://fonts.googleapis.com/css?family=Vollkorn+SC:600|Vollkorn:400|Crimson+Text:400,400i,700,700i');`,
  {
    body: {
      margin: 0,
    },
  }
);

export default ({ children, ...props }) => (
  <div id="global" css={{ overflow: 'auto' }} {...props}>
    {children}
  </div>
);
