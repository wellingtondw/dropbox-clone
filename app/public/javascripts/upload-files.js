import api from '../services/api/config.js'

export default class UploadFiles {
    constructor() {
      this.btnSendFileEl = document.querySelector('#btn-send-file')
      this.inputFilesEl = document.querySelector('#files')
      this.snackModalEl = document.querySelector('#snackbar-root')

      this.initEvents()
    }

    initEvents() {
      this.btnSendFileEl.addEventListener('click', (event) => {
        this.inputFilesEl.click();
      })

      this.inputFilesEl.addEventListener('change', async (event) => {
        const res = await this.uploadFilesPromises(event.target.files)
        console.log(res)
        this.snackModalEl.style.display = 'block'
      })
    }

    uploadFilesPromises(files) {
      const promises = [...files].map((file) => new Promise(
        async (reject, resolve) => {
          const formData = new FormData()
          formData.append('file', file)

          try {
            const response = await api.post('/upload', formData, {
              onUploadProgress: (event) => {
                let progress = Math.round(
                  (event.loaded * 100) / event.total
                );

                console.log(progress)              
              }
            })

            resolve(response)
          } catch(err) {
            reject(err)
          }
        }
      ))

      return Promise.all(promises)
    }
}