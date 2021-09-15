const UploadFileService = require('../services/UploadFileService')
const fs = require('fs/promises')

class UploadController {
  async uploadFile(req, res, next) {
    try {
      const { filename, originalname, mimetype, destination } = req.file
      const uploadFileService = new UploadFileService()
      
      const file = await uploadFileService.execute({ filename, originalname, mimetype, destination })

      res.json({ file })
    } catch(error) {
      const { filename, destination } = req.file

      next({ file: req.file })

      await fs.unlink(`${destination}/${filename}`, ((err) => {
        if(err) {
          console.log(`error deleting file: ${destination}/${filename}`)
        }
      }))      
    } 
  }

}

module.exports = UploadController