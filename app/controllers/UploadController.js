const UploadFileService = require('../services/UploadFileService')

class UploadController {
  async uploadFile(req, res, next) {
    try {
      const { filename, originalname, mimetype, destination } = req.file
      const uploadFileService = new UploadFileService()
      
      const file = await uploadFileService.execute({ filename, originalname, mimetype, destination })

      res.json({ file })
    } catch(error) {
      next(error)
    } 
  }

}

module.exports = UploadController