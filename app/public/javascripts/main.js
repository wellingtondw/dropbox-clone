import UploadFilesController from './controllers/uploadFilesController.js'
import ListFilesController from './controllers/listFilesController.js'
import FilesAndDirectoriesController from './controllers/filesAndDirectoriesController.js'


const filesAndDirectoriesController = new FilesAndDirectoriesController()
new ListFilesController({ filesAndDirectoriesController })
new UploadFilesController()