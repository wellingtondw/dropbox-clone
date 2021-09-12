const File = require('../models/File')

class UploadFileService {
  async execute({ filename, originalname, mimetype, destination }) {
    const file = new File({ filename, originalname, mimetype, destination })

    await file.save()

    return file
  }
}

module.exports = UploadFileService