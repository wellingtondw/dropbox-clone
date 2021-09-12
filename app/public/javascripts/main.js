import UploadFilesController from './uploadFilesController.js'
import ListFilesController from './listFilesController.js'

const listFilesController = new ListFilesController()
new UploadFilesController({ listFilesController })

