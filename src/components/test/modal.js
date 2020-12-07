// modal.js
import template from './modal.ejs'
// require('./modal.scss')
import './modal.css'

export default function modal () {
  return {
    name: 'modal',
    template: template
  }
}