const { createProxyMiddleware } = require ('https://aa-52yv.onrender.com');
module.exports = function(app) {
    app.use(
       '/api',
       createProxyMiddleware({
        target: 'https://aa-52yv.onrender.com',
        changeOrigin:true,

       }) 
    );
    app.use(
        '/api2',
        createProxyMiddleware({
            target: 'https://aa-52yv.onrender.com',
            changeOrigin: true,
        })
    );
};