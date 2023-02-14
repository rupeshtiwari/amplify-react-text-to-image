const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: 'https://7ub1xio0m9.execute-api.us-east-1.amazonaws.com',
  changeOrigin: true,
};
module.exports = function(app) {
  app.use(
    '/test',
    createProxyMiddleware(proxy)
  );
};