'use strict'

const {ipcRenderer, shell} = require('electron')

let tabActive = 'general';

let els = document.querySelectorAll('header li')
for (let el of els) {
  el.addEventListener('click', function (event) {
    document.querySelector(`#${tabActive}-tab`).classList.remove('active')
    if (document.querySelector('header li.active')) document.querySelector('header li.active').classList.remove('active')
    this.classList.add('active')
    tabActive = this.id
    document.querySelector(`#${tabActive}-tab`).classList.add('active')
  })
}

document.addEventListener('DOMContentLoaded', () => ipcRenderer.send('init-settings'), false)

ipcRenderer.on('init', (event, config) => {
  document.querySelector(`#position-${config.posButton}`).classList.add('active')
  document.querySelector(`#type-${config.typeButton}`).classList.add('active')
})


//
// ipcRenderer.on('init', (event, version) => {
//   document.querySelector('#version span').innerHTML = version
// })
//
// ipcRenderer.on('update', (event, message) => {
//   document.querySelector('#update').innerHTML = message
//   if (document.querySelector('#update span')) {
//     document.querySelector('#update span').addEventListener('click', function(event) {
//       shell.openExternal(this.getAttribute('data-link'))
//     })
//   }
// })
//
// document.querySelector('h1').addEventListener('click', () => {
//   shell.openExternal('https://crea-th.at/p/colorpicker/')
// })
