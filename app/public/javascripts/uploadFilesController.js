import api from '../services/api/config.js'

import { formatTimeToShowInScreen } from '../utils/date.js'

export default class uploadFilesController {
    constructor() {
      this.btnSendFileEl = document.querySelector('#btn-send-file')
      this.inputFilesEl = document.querySelector('#files')
      this.snackModalEl = document.querySelector('#snackbar-root')
      this.progressBarEl = this.snackModalEl.querySelector('.mc-progress-bar-fg')
      this.filenameEl = this.snackModalEl.querySelector('.filename')
      this.timeLeftEl = this.snackModalEl.querySelector('.timeleft')

      this.initEvents()
    }

    initEvents() {
      this.btnSendFileEl.addEventListener('click', (event) => {
        this.inputFilesEl.click();
      })

      this.inputFilesEl.addEventListener('change', (event) => {
        this.uploadFilesPromises(event.target.files)

        this.showProgressModal()
      })
    }

    uploadFilesPromises(files) {
      const promises = [...files].map((file) => new Promise(
        async (reject, resolve) => {
          const formData = new FormData()
          formData.append('file', file)

          try {

            this.startUploadTime = Date.now()

            const response = await api.post('/upload', formData, {
              onUploadProgress: (event) => {
                this.uploadProgress(event, file)            
              },
            })

            this.resetProgressModal()
            this.showProgressModal(false)

            resolve(response)
          } catch(err) {
            this.resetProgressModal()
            this.showProgressModal(false)
            reject(err)
          }
        }
      ))

      return Promise.all(promises)
    }

    showProgressModal(show = true) {
      this.snackModalEl.style.display = show ? 'block' : 'none'
    }

    uploadProgress(event, file) {
      const loaded = event.loaded 
      const total = event.total

      const uploadPercent = (loaded * 100) / total
      const percentFormatted = Math.round((loaded * 100) / total);

      const timeSpent = Date.now() - this.startUploadTime
      const timeLeft = ((100 - uploadPercent) * timeSpent) / uploadPercent

      this.progressBarEl.style.width = `${percentFormatted}%`
      
      this.filenameEl.innerHTML = file.name
      this.timeLeftEl.innerHTML = formatTimeToShowInScreen(timeLeft)
    }

    resetProgressModal() {
      this.inputFilesEl.value = ''
      this.progressBarEl.style.width = '0%'
      
      this.filenameEl.innerHTML = ''
      this.timeLeftEl.innerHTML = ''
    }
}