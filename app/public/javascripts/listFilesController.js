import { getFileIconByType } from '../utils/files.js'

export default class ListFilesController {
  constructor() {
    this.socket = io()

    this.listFilesEl = document.querySelector('#list-of-files-and-directories')

    this.getFiles()
  }

  renderListFiles(file) {
    const li = document.createElement('li')
    li.dataset.key = file._id 

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
