// function to include html files

w3IncludeHTML();


// drilldown

$(function () {

  // Create the chart
  $('#container').highcharts({
    exporting: {
      enabled: false
    },

    chart: {
      type: 'bar'
    },
    title: {
      text: 'Regierungsratswahlen'
    },
    xAxis: {
      type: 'category'
    },

    legend: {
      enabled: false
    },

    tooltip: {
      enabled: false
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },

    yAxis: {
      labels: {
        formatter: function() {
          return this.value+"%";
        }
      },
      title: {
        text: 'Stimmenanteil am Total aller gültigen Wahlzettel'
      }
    },

    series: [{
      name: 'Kandidaten',
      color: '#009655',
      data: [{
        name: 'Eva Herzog (SP)',
        y: 63,
        drilldown: 'herzog'
      }, {
        name: 'Conradin Cramer (LDP)',
        y: 59,
        drilldown: 'cramer'
      }, {
        name: 'Christoph Brutschin (SP)',
        y: 56,
        drilldown: 'brutschin'
      }, {
        name: 'Lukas Engelberger (CVP)',
        y: 56,
        drilldown: 'engelberger'
      }, {
        name: 'Baschi Dürr (FDP)',
        y: 51,
        drilldown: 'duerr'
      }, {
        name: 'Hans-Peter Wessels (SP)',
        y: 48,
        drilldown: 'wessels'
      }, {
        name: 'Lorenz Nägelin (SVP)',
        y: 40,
        drilldown: 'naegelin'
      }, {
        name: 'Elisabeth Ackermann (Grüne)',
        y: 40,
        drilldown: 'ackermann'
      }, {
        name: 'Heidi Mück (Basta!)',
        y: 32,
        drilldown: 'mueck'
      }, {
        name: 'Martina Bernasconi (glp)',
        y: 21,
        drilldown: 'bernasconi'
      }, {
        name: 'Andere',
        y: 17
      }
      ]
    }],
    drilldown: {
      series: [{
        id: 'animals',
        data: [
          ['Cats', 4],
          ['Dogs', 2],
          ['Cows', 1],
          ['Sheep', 2],
          ['Pigs', 1]
        ]
      }, {
        id: 'fruits',
        data: [
          ['Apples', 4],
          ['Oranges', 2]
        ]
      }, {
        id: 'cars',
        data: [
          ['Toyota', 4],
          ['Opel', 2],
          ['Volkswagen', 2]
        ]
      }]
    }
  });
});




