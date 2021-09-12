import { getFileIconByType } from '../../utils/files.js'

export default class ListFilesController {
  constructor({ filesAndDirectoriesController }) {
    this.socket = io()

    this.listFilesEl = document.querySelector('#list-of-files-and-directories')
    this.filesAndDirectoriesController = filesAndDirectoriesController

    this.getFiles()
  }

  renderListFiles(file) {
    const li = document.createElement('li')
    li.dataset.key = file._id 
    li.className = 'files-and-directories-list-item'

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

  getFiles() {
    this.socket.emit('list_files', files => {
      this.listFilesEl.innerHTML = ''

      files.forEach(file => {
        this.listFilesEl.appendChild(this.renderListFiles(file))
      })
    })
  }

}
