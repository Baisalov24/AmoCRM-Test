const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
    const proxy = createProxyMiddleware({
      target: 'https://temirlanbaisalov35.amocrm.ru',
      changeOrigin: true,
      pathRewrite: (path) => req.query.path,
      headers: {
        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` // Опционально
      }
    });
    proxy(req, res);
  };