import Modal from './components/test/modal'
import './assets/style/common.css'

const App = function () {
  let div = document.createElement('div')
  div.setAttribute('id', 'app')
  document.body.appendChild(div)
  let dom = document.getElementById('app')
  let modal = new Modal()
  dom.innerHTML = modal.template({
    title: '标题',
    content: '内容',
    footer: '底部'
  })
}

const app = new App()