const router = require('express').Router()
const FilesController = require('../controllers/FilesController')

const filesController = new FilesController()

router.put('/files/rename', filesController.renameFile)

module.exports = router