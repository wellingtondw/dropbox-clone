const { io } = require('../config/http')

io.on('connect', socket => {

  socket.emit('list_files', {
    message: 'Listando arquivos'
  })
})