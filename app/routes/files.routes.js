const router = require('express').Router()
const FilesController = require('../controllers/FilesController')

const filesController = new FilesController()

router.put('/files/rename', filesController.rename)
router.delete('/files/:id', filesController.delete)

module.exports = router