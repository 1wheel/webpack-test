import Library from './library'
import logger from './logger'
// import './style.css'


//index.js start
console.log('index.js running')

console.log(module)
if (module.hot) {
  module.hot.accept('./library', function() {
    console.clear()
    console.log('hrm updating')
    Library.update()
  })
  module.hot.accept('./logger', function() {
    console.clear()
    logger.update()
  })
} else {
}

Library.init()
Library.update()
//index.js end
