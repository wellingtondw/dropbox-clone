import UploadFilesController from './uploadFilesController.js'
import ListFilesController from './listFilesController.js'
import FilesAndDirectoriesController from './filesAndDirectoriesController.js'

const filesAndDirectoriesController = new FilesAndDirectoriesController()
const listFilesController = new ListFilesController({ filesAndDirectoriesController })
new UploadFilesController({ listFilesController })

