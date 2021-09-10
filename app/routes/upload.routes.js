const router = require('express').Router()
const multer = require('multer')
const uploadConfig = require('../config/upload')

const upload = multer(uploadConfig)

router.post('/uploads', upload.single('file') ,(req, res) => {
  const file = req.file

  res.json({ file })
})

module.exports = router