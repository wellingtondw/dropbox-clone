const router = require('express').Router()
const multer = require('multer')
const uploadConfig = require('../config/upload')

const upload = multer(uploadConfig)

router.post('/upload', upload.single('file') ,(req, res) => {
  const { filename, originalname, mimetype, destination } = req.file

  const file = { filename, originalname, mimetype, destination }

  res.json({ file })
})

module.exports = router