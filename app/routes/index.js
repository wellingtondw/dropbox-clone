const router = require('express').Router()

const viewsRouter = require('./views.routes')
const uploadRouter = require('./upload.routes')

router.use(viewsRouter)
router.use(uploadRouter)

module.exports = router
