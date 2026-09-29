const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// the json link doesn't allow browser requests (CORS), so in web preview
// requests to /api/... are forwarded to aamras.com from the dev server
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    if (req.url.startsWith('/api/')) {
      fetch('https://aamras.com' + req.url.replace('/api', ''))
        .then((r) => r.text())
        .then((body) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(body);
        })
        .catch(() => {
          res.statusCode = 500;
          res.end();
        });
      return;
    }
    return middleware(req, res, next);
  };
};

module.exports = config;
