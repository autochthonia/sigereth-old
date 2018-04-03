import { injectGlobal } from 'emotion';
import React from 'react';

import watercolor from './seamless-watercolor-10.jpg';

injectGlobal({
  '@import':
    "url('https://fonts.googleapis.com/css?family=Vollkorn+SC:600|Vollkorn:400|Crimson+Text:400,400i,700,700i')",
  body: {
    margin: 0,
    ':before': {
      content: '""',
      position: 'fixed',
      left: '0',
      right: '0',
      zIndex: '-1',
      display: 'block',
      backgroundImage: `url(${watercolor})`,
      // backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      filter: 'blur(5px) opacity(0.4)',
    },
  },
});
// Alike:400

export default ({ children, ...props }) => (
  <div id="global" {...props}>
    {children}
  </div>
);
