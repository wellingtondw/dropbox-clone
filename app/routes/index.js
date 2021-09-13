const router = require('express').Router()

const viewsRouter = require('./views.routes')
const uploadRouter = require('./upload.routes')
const filesRouter = require('./files.routes')

router.use(viewsRouter)
router.use(uploadRouter)
router.use(filesRouter)

module.exports = router
