const File = require('../models/File')

class UpdateFileNameService {
  async execute({ _id, originalname }) {
    await File.findByIdAndUpdate({ _id }, {
      originalname
    })    
  }
}

module.exports = UpdateFileNameService