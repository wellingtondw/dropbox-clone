const { io } = require('../config/http')

const ListAllFilesService = require('../services/ListAllFilesService')

io.on('connect', socket => {
  socket.on('list_files', async (callback) => {
    const listAllFilesService = new ListAllFilesService()

    const files = await listAllFilesService.execute()

    socket.emit('files', files)
  })
})