import { api, socket } from '../../services/api/config.js'

export default class FilesAndDirectoriesController {
  constructor() {
    this.listFilesEl = document.querySelector('#list-of-files-and-directories')
    this.btnNewFolderEl = document.querySelector('#btn-new-folder')
    this.btnRenameEl = document.querySelector('#btn-rename')
    this.btnDeleteEl = document.querySelector('#btn-delete')
  
    this.initEvents()
  } 

  initEvents() {
    this.btnRenameEl.addEventListener('click', () => {
      this.updateFileName()
    })
  }

  getSelectedFiles() {
    const selectedFiles = this.listFilesEl.querySelectorAll('.selected')

    return selectedFiles
  }

  handleRenderActionsMenu() {
    switch(this.getSelectedFiles().length) {
      case 0:
        this.btnRenameEl.style.display = 'none'
        this.btnDeleteEl.style.display = 'none'
        break
      case 1:
        this.btnRenameEl.style.display = 'block'
        this.btnDeleteEl.style.display = 'block'
        break
      default:
        this.btnRenameEl.style.display = 'none'
        this.btnDeleteEl.style.display = 'block'
    }
  }

  async updateFileName() {
    try {
      const selectedFile = this.getSelectedFiles()[0]
      const { _id, originalname } = JSON.parse(selectedFile.dataset.values)

      const result = prompt('Digite o novo nome', originalname)

      await api.put('/files/rename', {
        _id,
        originalname: result
      })

      socket.emit('list_files')
    } catch(err) {
      console.log(err)
    }
  }
  
  handleClickFilesAndDirectoriesListItem(event, item) {
    if(event.shiftKey) {
      const firstLi = this.listFilesEl.querySelector('.selected')

      if(firstLi) {
        let indexStart
        let indexEnd
        const fullFilesAndDirectoriesList = item.parentElement.childNodes
        
        fullFilesAndDirectoriesList.forEach((el, index) => {
          if(firstLi === el) indexStart = index
          if(item === el) indexEnd = index
        })     

        const indexArr = [indexStart, indexEnd].sort()

        fullFilesAndDirectoriesList.forEach((el, index) => {
          if(index >= indexArr[0] && index <= indexArr[1]) {
            el.classList.add('selected')
          }
        })

        this.handleRenderActionsMenu()
        return
      }
    }

    if(!event.ctrlKey) {
      this.listFilesEl.querySelectorAll('.selected').forEach(el => {
        el.classList.remove('selected')
      })
    }

    item.classList.toggle('selected')  
    this.handleRenderActionsMenu()
  }
}