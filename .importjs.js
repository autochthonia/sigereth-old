module.exports = {
  aliases: {
    styled: 'node_modules/react-emotion',
  },
  namedExports: {
    react: ['Component'],
    lodash: ['without', 'noop', 'debounce', 'orderBy', 'merge', 'isNumber', 'toNumber'],
    '@storybook/react': ['storiesOf', 'action'],
    'react-apollo': ['Mutation', 'Query'],
  },
};
