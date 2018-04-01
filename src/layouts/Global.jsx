import React from 'react';

import { injectGlobal } from 'emotion';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,700,700i|Vollkorn+SC:600|Vollkorn:400');
`;

export default ({ children, ...props }) => (
  <div id="global" {...props}>
    {children}
  </div>
);
