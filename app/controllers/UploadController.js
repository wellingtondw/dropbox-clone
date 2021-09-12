const File = require('../models/Files')

class UploadController {
  async uploadFile(req, res, next) {
    try {
      const { filename, originalname, mimetype, destination } = req.file

      const file = new File({ filename, originalname, mimetype, destination })

      await file.save()

      res.json({ file })
    } catch(error) {
      next(error)
    } 
  }
}

module.exports = UploadController