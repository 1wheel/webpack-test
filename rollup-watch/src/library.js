// import * as d3 from 'd3'
// import * as jp from 'd3-jetpack'
// import 'd3-jetpack'
// import * as d3 from 'd3';
// import d3 from 'd3';
// import * as d3 from 'd3';
// import d3 as 'd3'
// import d3 from 'd3'


// export * from "graph-scroll"

// console.clear()

// console.log(jp.nestBy, d3.select('body').at)

console.log(d3)

var width = window.innerWidth
var height = width

function init() {
  if (d3.selectAll('circle').size()) return
  var svg = d3.select('body').html('').append('svg').at({ width, height })

  svg.appendMany(d3.range(100), 'circle')
}



function update() {
  console.log('hisfffssssfffsdfsdfasdfasdf')
  d3.selectAll('circle').transition().duration(d => Math.random() * 11001).at({
    cx: d => Math.random() * width,
    cy: d => Math.random() * width,
    r: d => Math.random() * 10,
    fillOpacity: d => Math.random(),
    stroke: '#fff'
  })
}







export default {
  update,
  init
}


