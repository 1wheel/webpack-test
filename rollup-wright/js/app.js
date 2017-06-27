import reload from './component.js'

window.reload = reload

window.onload = function() {
  document.body.innerText = 'Refresheddddd at ' + new Date()
  console.log('reloadddsdfasdfsdfsdfsdfddd')
}
