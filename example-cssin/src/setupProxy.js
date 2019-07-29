/* eslint-disable */

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/proxy-url/corp/**', {
      target: 'http://127.0.0.1:4100',
      changeOrigin: true,
    }),
  );
};
