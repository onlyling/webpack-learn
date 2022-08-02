import { Nn123 } from './utils'

import './style.less'

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#root')!.innerHTML = Nn123('098')
  document.querySelector('body')?.addEventListener('click', () => {
    throw '急急急'
  })
})
