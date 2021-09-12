const File = require('../models/File')

class ListAllFilesService {
  async execute() {
    const files = await File.find()

    return files
  }
}

module.exports = ListAllFilesService