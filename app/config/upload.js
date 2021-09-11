const multer = require('multer')
const path = require('path')
const { v4: uuid } = require('uuid')

const tmpFolder = path.resolve(__dirname, '..', 'tmp');

const config = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(req, file, cb) {
      const fileHash = uuid()
      const filename = `${fileHash}-${file.originalname}`

      return cb(null, filename)
    }
  })

}

module.exports = config