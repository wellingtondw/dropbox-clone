const UpdateFileNameService = require('../services/UpdateFileNameService')

class FilesController {
  async renameFile(req, res, next) {
    try { 
      const { _id, originalname } = req.body
      const updateFileNameService = new UpdateFileNameService()

      await updateFileNameService.execute({ _id, originalname })
      
      res.status(200).send()
    } catch(error) {
      next(error)
    } 
  }

}

module.exports = FilesController