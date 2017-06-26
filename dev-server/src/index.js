import Library from './library';
import './style.css';

console.log('index.js running')

console.log(module)
if (module.hot) {
  module.hot.accept('./library', function() {
    // console.log('Accepting the updated library module!');
    Library.update();
    Library.log();
  })
} else{
  
}

Library.update();
