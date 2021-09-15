const UpdateFileNameService = require('../services/UpdateFileNameService')
const DeleteFileService = require('../services/DeleteFileService')

class FilesController {
  async rename(req, res, next) {
    try { 
      const { _id, originalname } = req.body
      const updateFileNameService = new UpdateFileNameService()

      await updateFileNameService.execute({ _id, originalname })
      
      res.json({ message: 'successfully renamed'})
    } catch(error) {
      next(error)
    } 
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params
      const { destination, filename } = req.body
      const deleteFileService = new DeleteFileService()

      await deleteFileService.execute({ _id: id, destination, filename })
      
      res.json({ message: 'successfully excluded'})
    } catch (error) {
      next(error)
    }
  }

}

module.exports = FilesController