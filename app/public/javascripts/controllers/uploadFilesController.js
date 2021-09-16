import { api, socket } from '../../services/api/config.js'
import { formatTimeToShowInScreen } from '../../utils/date.js'

export default class uploadFilesController {
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
        
        this.btnSendFileEl.disabled = true
        this.showProgressModal()
        
        const promisesResult = await Promise.allSettled(this.uploadFilesPromises(event.target.files))      

        this.handlePromisesResultErrors(promisesResult)
        
        this.uploadComplete()
      })
    }

    updateProgressItem(id) {
      const progressDataStatusDiv = document.createElement('div')
      progressDataStatusDiv.dataset.id = id

      progressDataStatusDiv.innerHTML = `      
        <div class="mc-snackbar-holder-backdrop">
            <div class="mc-snackbar">
                <div class="mc-snackbar-container mc-snackbar-container--snackbar-icon">
                    <div class="mc-snackbar-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" class="mc-icon-template-status mc-icon-template-status-rotating">
                            <title>Status: Syncing</title>
                            <path d="M16 24a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-3a5 5 0 0 0 3.467-8.602l-.57.844A4 4 0 0 1 16 20l.001-1.5-2.5 2 2.5 2V21zm0-10a5 5 0 0 0-3.667 8.399l.578-.858A4 4 0 0 1 16 12v1.5l2.5-2-2.5-2V11z"
                                fill="#0070E0" fill-rule="nonzero"></path>
                        </svg>
                    </div>
                    <p class="mc-snackbar-title">Enviando o arquivo <span class="filename"></span> - <span class="timeleft"></span> restantes</p>
                </div>
                <div class="mc-progress-bar-bg">
                    <div class="mc-progress-bar-fg" style="width: 0%;"></div>
                </div>
            </div>
        </div>
      `
     
      return this.snackModalEl.append(progressDataStatusDiv)
    }

    removeProgressItem(index) {
      const currentUploadingFile = this.getCurrentUploadingFile(index)
      
      return this.snackModalEl.removeChild(currentUploadingFile)
    }

    uploadFilesPromises(files) {
      const promises = [...files].map((file, index) => new Promise(
        async (resolve, reject) => {
          const formData = new FormData()
          formData.append('file', file)
         
          try {
            this.startUploadTime = Date.now()

            this.updateProgressItem(index)

            const response = await api.post('/upload', formData, {
              onUploadProgress: (event) => {
                const { progress, timeLeft } = this.uploadProgress(event)    

                this.updateUploadView({ filename: file.name, progress, timeLeft, index })                           
              }
            })

            this.removeProgressItem(index)
            socket.emit('list_files')

            resolve(response)
          } catch(err) {
            this.removeProgressItem(index)
            reject(err.response)
          }
        }
      ))

      return promises
    }

    showProgressModal(show = true) {
      this.snackModalEl.style.display = show ? 'flex' : 'none'
    }

    getCurrentUploadingFile(index) {
      let currentUploadingFile = null
      
      this.snackModalEl.childNodes.forEach(item => {
        if(item.dataset.id === index.toString()) {
          currentUploadingFile = item
        }
      })

      return currentUploadingFile
    }

    updateUploadView({ progress, filename, timeLeft, index }) {
      const currentUploadingFile = this.getCurrentUploadingFile(index)

      const progressBarEl = currentUploadingFile.querySelector('.mc-progress-bar-fg')
      const filenameEl = currentUploadingFile.querySelector('.filename')
      const timeLeftEl = currentUploadingFile.querySelector('.timeleft')

      progressBarEl.style.width = `${progress}%`      
      filenameEl.innerHTML = filename
      timeLeftEl.innerHTML = formatTimeToShowInScreen(timeLeft)
    }

    uploadProgress(event) {
      const { loaded, total } = event

      const uploadPercent = (loaded * 100) / total
      const percentFormatted = Math.round((loaded * 100) / total);

      const timeSpent = Date.now() - this.startUploadTime
      const timeLeft = ((100 - uploadPercent) * timeSpent) / uploadPercent

      return {
        progress: percentFormatted,
        timeLeft
      }    
    }

    handlePromisesResultErrors(promisesResult) {
      promisesResult.forEach(promiseResult => {
        if(promiseResult.status === 'rejected') {
          window.alert(`Erro ao tentar realizar o upload ${promiseResult.reason.data.file.originalname}`)
        }
      })
    }

    uploadComplete() {
      this.inputFilesEl.value = ''     
      this.showProgressModal(false)
      this.btnSendFileEl.disabled = false

      socket.emit('list_files')
    } 
}