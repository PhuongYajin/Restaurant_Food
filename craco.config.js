/* eslint-disable import/no-extraneous-dependencies */
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line global-require
        require('tailwindcss'),
        // eslint-disable-next-line global-require
        // eslint-disable-next-line import/no-extraneous-dependencies
        // eslint-disable-next-line global-require
        // eslint-disable-next-line import/no-extraneous-dependencies
        // eslint-disable-next-line global-require
        require('autoprefixer'),
      ],
    },
  },
};
