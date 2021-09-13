import { socket } from '../../services/api/config.js'
import { getFileIconByType } from '../../utils/files.js'

export default class ListFilesController {
  constructor({ filesAndDirectoriesController }) {
    this.listFilesEl = document.querySelector('#list-of-files-and-directories')
    this.filesAndDirectoriesController = filesAndDirectoriesController

    this.initEvents()
  }

  initEvents() {
    socket.emit('list_files')

    socket.on('files', (files) => {
      this.handleFiles(files)
    })   
  }

  renderListFiles(file) {
    const li = document.createElement('li')
    li.dataset.values = JSON.stringify({
      _id: file._id,
      originalname: file.originalname
    })

    li.addEventListener('click', (event) => {
      this.filesAndDirectoriesController
        .handleClickFilesAndDirectoriesListItem(event, li)
    })

    li.innerHTML = `
      ${getFileIconByType(file.mimetype)}
      <div class="name text-center">${file.originalname}</div>
    `

    return li
  }

  handleFiles(files) {
      this.listFilesEl.innerHTML = ''

      files.forEach(file => {
        this.listFilesEl.appendChild(this.renderListFiles(file))
      })
  }

}
