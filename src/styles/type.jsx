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

const HEADLINE_STACK = "'Vollkorn', serif";
const BODY_STACK = "'Crimson Text', serif";

const FONT_WEIGHT = 700;
const bold = {
  b: {
    fontWeight: FONT_WEIGHT,
  },
};

export const H1 = styled.h1({
  ...black,
  ...bold,
  fontSize: '1.6em',
  fontFamily: HEADLINE_STACK,
});
export const H2 = styled.h1({
  ...black,
  ...bold,
  fontSize: '1.4em',
  fontFamily: HEADLINE_STACK,
});
export const H3 = styled.h1({
  ...black,
  ...bold,
  fontSize: '1.2em',
  fontFamily: HEADLINE_STACK,
});

export const H4 = styled.h4({
  ...bold,
  color: colors.blue,
  margin: 0,
  fontSize: '1.2em',
  fontFamily: "'Vollkorn SC', serif",
});

export const H5 = styled.h5({
  ...black,
  ...bold,
  margin: 0,
  fontFamily: BODY_STACK,
  fontSize: '1em',
  fontWeight: FONT_WEIGHT,
});

export const H6 = styled.h5({
  ...black,
  ...bold,
  margin: 0,
  fontFamily: BODY_STACK,
  fontSize: '1em',
  fontWeight: 'normal',
  fontStyle: 'italic',
});

export const Body = styled.span({
  ...black,
  ...bold,
  fontFamily: BODY_STACK,
  fontSize: '1em',
});

export const BodyDiv = Body.withComponent('div');

export const BodyP = styled(Body)({
  margin: 0,
  marginBottom: '0.75em',
  ':not(:last-child)': {},
}).withComponent('p');
