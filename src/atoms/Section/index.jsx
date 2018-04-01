import styled from 'react-emotion';

const Section = styled.section(
  {
    margin: 0,
    padding: 0,
  },
  ({ size }) => {
    switch (size) {
      case 'small':
        return { marginBottom: '.333em' };
      case 'large':
        return { marginBottom: '1.2em' };
      case 'medium':
      default:
        return { marginBottom: '0.75em' };
    }
  },
);

export default Section;
