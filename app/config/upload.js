const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { v4: uuid } = require('uuid')

const tmpFolder = path.resolve(__dirname, '..', 'tmp');

const config = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(req, file, cb) {
      const fileHash = uuid()
      const filename = `${fileHash}-${file.originalname}`
      cb(null, filename)
      
      req.on('aborted', () => {
        const fullFilePath = path.join(tmpFolder, filename);
        fs.unlink(fullFilePath, (err) => {
          if (err) {
            throw err;
          }
        });
      })
    }
  })

}

module.exports = config