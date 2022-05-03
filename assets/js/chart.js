anychart.onDocumentReady(function () {
  // create data set on our data
  var chartData = {
    rows: [
      ['Jan', 0],
      ['Feb', 2.82],
      ['March', 7.29],
      ['Apr', -8.69],
      ['May'],
      ['June'],
      ['July'],
      ['Aug'],
      ['Sep'],
      ['Oct'],
      ['Nov'],
      ['Dec'],
    ]
  };

  // create column chart
  var chart = anychart.column();

  // set chart data
  chart.data(chartData);

  // turn on chart animation
  chart.animation(true);

  // set chart title text settings
  chart.interactivity().hoverMode('single');

  // set axis settings
  chart.xAxis().value(0).labels(false);
  chart.xAxis(1).stroke(null).orientation('bottom');
  chart.yAxis().labels().format('{%Value}%');

  chart.labels(true);
  chart
    .tooltip()
    .title(false)
    .separator(false)
    .format('{%Name} {%Value}{decimalSeparator:\\,}%');

  // tune column paddings
  // chart.barsPadding(0.1).barGroupsPadding(0.9);

  // set container id for the chart
  chart.container('container');

  // initiate chart drawing
  chart.draw();
});