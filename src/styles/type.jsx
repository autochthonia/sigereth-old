import styled from 'react-emotion';

import colors from './colors';

const black = {
  '@media screen': {
    color: '#333',
  },
  '@media print': {
    color: '#000',
  },
};

export const H4 = styled.h1({
  color: colors.blue,
  margin: 0,
  fontVariant: 'small-caps',
  fontSize: '1.2em',
  fontFamily: "'Vollkorn SC', serif",
});

export const H5 = styled.h5({
  ...black,
  margin: 0,
  fontFamily: "'Crimson Text', serif",
  fontSize: '1em',
  fontWeight: 700,
});

export const H6 = styled.h5({
  ...black,
  margin: 0,
  fontFamily: "'Crimson Text', serif",
  fontSize: '1em',
  fontWeight: 'normal',
  fontStyle: 'italic',
});

export const Body = styled.span({
  ...black,
  fontFamily: "'Crimson Text', serif",
  fontSize: '1em',
});

export const BodyDiv = Body.withComponent('div');

export const BodyP = styled(Body)({
  margin: 0,
  marginBottom: '0.75em',
  ':not(:last-child)': {},
}).withComponent('p');
