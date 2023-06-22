const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/copy",
    createProxyMiddleware({
      target: "http://localhost:8082",
      changeOrigin: true,
      pathRewrite: {
        "^/copy": "", // 경로에서 '/api'를 제거하여 실제 요청 경로를 구성
      },
    })
  );
};
