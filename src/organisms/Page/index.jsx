import React from 'react';
import styled from 'react-emotion';

const PageWrapper = styled.div({
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  height: '279.4mm',
  width: '215.9mm',
  padding: '2.75cm 3cm',
  paddingBottom: '1.5cm',
  fontSize: 12,
  textRendering: 'optimizeLegibility',
  pageBreakBefore: 'always',
  pageBreakAfter: 'always',
  backgroundImage: 'url(https://i.imgur.com/DmZILfq.png)',
  backgroundSize: 'cover',
  columns: 2,
});

const Page = ({ children, ...props }) => <PageWrapper {...props}>{children}</PageWrapper>;

export default Page;
