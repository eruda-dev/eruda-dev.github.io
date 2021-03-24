const path = require('path');

module.exports = {
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9090,
    },
};
