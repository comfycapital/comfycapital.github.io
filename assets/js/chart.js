function getData() {
    return [
      ['Jan',0],
      ['Feb',2.82],
      ['Mar',7.21],
      ['Apr'],
      ['May'],
      ['June'],
      ['July'],
      ['Aug'],
      ['Sep'],
      ['Oct'],
      ['Nov'],
      ['Dec']
    ];
  }

anychart.onDocumentReady(function () {

  // create a data set on our data
var dataSet = anychart.data.set(getData());

// map data for the line chart,
// take x from the zero column and value from the first column
var seriesData = dataSet.mapAs({ x: 0, value: 1 });

// create a line chart
var chart = anychart.line();

// create a line series with the mapped data
var lineChart = chart.spline(seriesData);
lineChart
    .name('18-34')
    .stroke('2 #202020')
    .tooltip()
    .format("{%value}%");

// set the container id for the line chart
chart.container('container');

// draw the line chart
chart.draw();

});