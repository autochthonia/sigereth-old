import styled from 'react-emotion';

import colors from './colors';

const fontColors = {
  '@media screen': {
    color: '#333',
  },
  '@media print': {
    color: '#000',
  },
  a: {
    color: colors.darkBlue,
    textDecoration: 'none',
    transition: 'color 0.2s',
    ':hover': {
      color: colors.blue,
    },
  },
};

export const HEADLINE_STACK = "'Vollkorn', serif";
export const HEADLINE_SC_STACK = "'Vollkorn SC', serif";
export const BODY_STACK = "'Crimson Text', serif";

const FONT_WEIGHT = 700;
const bold = {
  b: {
    fontWeight: FONT_WEIGHT,
  },
};

export const H1 = styled.h1({
  ...fontColors,
  ...bold,
  fontSize: '1.6em',
  fontFamily: HEADLINE_STACK,
});
export const H2 = styled.h1({
  ...fontColors,
  ...bold,
  fontSize: '1.4em',
  fontFamily: HEADLINE_STACK,
});

export const h3CSS = {
  ...fontColors,
  ...bold,
  fontSize: '1.2em',
  fontFamily: HEADLINE_STACK,
};
export const H3 = styled.h3(h3CSS);

export const h4CSS = {
  ...bold,
  color: colors.blue,
  margin: 0,
  fontSize: '1.2em',
  fontFamily: HEADLINE_SC_STACK,
};
export const H4 = styled.h4(h4CSS);

export const H5 = styled.h5({
  ...fontColors,
  ...bold,
  margin: 0,
  fontFamily: BODY_STACK,
  fontSize: '1em',
  fontWeight: FONT_WEIGHT,
});

export const H6 = styled.h5({
  ...fontColors,
  ...bold,
  margin: 0,
  fontFamily: BODY_STACK,
  fontSize: '1em',
  fontWeight: 'normal',
  fontStyle: 'italic',
});

export const bodyCSS = {
  ...fontColors,
  ...bold,
  fontFamily: BODY_STACK,
  fontSize: '1em',
};
export const Body = styled.span(bodyCSS);

export const BodyDiv = Body.withComponent('div');

export const BodyP = styled(Body)({
  margin: 0,
  marginBottom: '0.75em',
  ':not(:last-child)': {},
}).withComponent('p');

export const A = Body.withComponent('a');
