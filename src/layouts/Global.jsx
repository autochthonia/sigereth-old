import React from 'react';

import { injectGlobal } from 'emotion';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Vollkorn+SC:600|Vollkorn:400|Crimson+Text:400,400i,700,700i');
`;
// Alike:400

export default ({ children, ...props }) => (
  <div id="global" {...props}>
    {children}
  </div>
);
