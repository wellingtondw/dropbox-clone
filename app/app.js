const { server } = require('./config/http')
require('./websocket/FileService')

module.exports = server;
