export default class ListFilesController {
  constructor() {
    this.socket = io()

    this.getFiles()
  }

  getFiles() {
    this.socket.on('list_files', data => {
      console.log('Data', data)
    })
  }

}
