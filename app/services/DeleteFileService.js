const File = require('../models/File')

const fs = require('fs')

class DeleteFileService {
  async execute({ _id, destination, filename }) {  
    await File.deleteOne({ _id })

    fs.unlink(`${destination}/${filename}`, ((err) => {
      if(err) {
        console.log(`error deleting file: ${destination}/${filename}`)
      }
    }))
  }
}

module.exports = DeleteFileService