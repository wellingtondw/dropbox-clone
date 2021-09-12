const router = require('express').Router()
const multer = require('multer')
const uploadConfig = require('../config/upload')
const UploadController = require('../controllers/UploadController')

const upload = multer(uploadConfig)
const uploadController = new UploadController()

router.post('/upload', upload.single('file'), uploadController.uploadFile)

module.exports = router