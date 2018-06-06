const path = require('path')

module.exports = {
    mode : 'none',
    entry : './test/test.js',
    output : {
        path : path.resolve('test/build'),
        filename : 'build.test.js'
    }
}
