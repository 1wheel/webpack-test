'

// console.clear()

// console.log(jp.nestBy, d3.select('body').at)


// magic-id index.js start

var width = window.innerWidth
var height = width

function init() {
  return
  var svg = d3$1.select('body').html('').append('svg').at({ width, height })

  svg.appendMany(d3.range(100), 'circle')
}



function update() {
  console.log('hisfffssssfffsdfsdfasdfasdf')
  d3.selectAll('circle').transition().duration(d => Math.random() * 111).at({
    cx: d => Math.random() * width,
    cy: d => Math.random() * width,
    r: d => Math.random() * 1010,
    fillOpacity: d => Math.random(),
    stroke: '#fff'
  })
}







export default {
  update,
  init
}

// magic-id index.js end

