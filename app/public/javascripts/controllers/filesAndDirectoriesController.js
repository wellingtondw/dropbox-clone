export default class FilesAndDirectoriesController {
  constructor() {
    this.listFilesEl = document.querySelector('#list-of-files-and-directories')
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

        return
      }
    }

    if(!event.ctrlKey) {
      this.listFilesEl.querySelectorAll('.selected').forEach(el => {
        el.classList.remove('selected')
      })
    }

    item.classList.toggle('selected')    
  }
}