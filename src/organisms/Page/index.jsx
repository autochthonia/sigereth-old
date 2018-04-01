import { tint } from 'polished';
import React from 'react';
import styled from 'react-emotion';

const PageWrapper = styled.div({
  '@media print': {
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
    height: '279.4mm',
    width: '215.9mm',
    padding: '1cm',
    fontSize: 14,
    textRendering: 'optimizeLegibility',
    pageBreakBefore: 'always',
    pageBreakAfter: 'always',
    background: '#ccc', // temp
    // backgroundImage: 'url(https://i.imgur.com/DmZILfq.png)',
    // backgroundSize: 'cover',
    columns: 2,
  },
  '@media screen': {
    fontSize: 16,
    margin: '40px auto',
    maxWidth: 500,
    padding: 20,
    boxShadow: `0 4px 12px 0px ${tint(0.25, 'black')}`,
    // background: 'white',
    background: tint(0.02, 'rgb(40, 40, 0)'),
  },
});

const Page = ({ children, header, ...props }) => (
  <PageWrapper {...props}>
    {header && <header>{header}</header>}
    {children}
  </PageWrapper>
);

export default Page;
