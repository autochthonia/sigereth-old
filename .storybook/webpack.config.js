const rewireEmotion = require('react-app-rewire-emotion');
const merge = require('lodash/merge');

module.exports = function override(config, env) {
  const newConfig = merge({}, config, {
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
  });
  return rewireEmotion(newConfig, env, { inline: true });
};
