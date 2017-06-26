import * as d3 from 'd3/build/d3.node'
import * as jp from 'd3-jetpack'
import 'd3-jetpack'

// console.clear()
console.log(jp.nestBy, d3.select('body').at)

var width = window.innerWidth
var height = width

function init() {
  var svg = d3.select('body').html('').append('svg').at({ width, height })

  svg.appendMany(d3.range(100), 'circle')
}
if (!d3.selectAll('circle').size()) init()

function update() {
  d3.selectAll('circle').transition().duration(d => Math.random() * 7000 + 1000).at({
    cx: d => Math.random() * width,
    cy: d => Math.random() * width,
    r: d => Math.random() * 1,
    fillOpacity: d => Math.random(),
    stroke: '#fff'
  })
}

export default {
  log() {
    // Change this after the server is started to test
    console.log('Initial ffffffff...')
  },
  update
}
