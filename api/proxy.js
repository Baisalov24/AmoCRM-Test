const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://temirlanbaisalov35.amocrm.ru',
    changeOrigin: true,
    pathRewrite: (path) => req.query.path,
    onProxyReq: (proxyReq, req) => {
      if (req.body) {
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.write(JSON.stringify(req.body));
      }
    }
  });
  proxy(req, res);
};