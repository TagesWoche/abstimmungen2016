// function to include html files

w3IncludeHTML();


// drilldown

$(function () {

  // Create the chart
  $('#container').highcharts({
    exporting: {
      enabled: false
    },

    lang: {
        drillUpText: '◁ Zurück zur Übersicht'
    },

    chart: {
      type: 'bar',
      spacingTop: 40,
      events: {
        drilldown: function (e) {
          this.setTitle({text: e.point.name});
          this.yAxis[0].axisTitle.attr({
            text: 'Stimmenanteile der Regierungskandidaten nach Partei' });
        },
        drillup: function(e) {
          this.setTitle({ text: '' });
          this.yAxis[0].axisTitle.attr({
            text: 'Stimmenanteil am Total aller gültigen Wahlzettel' });
      }
      }
    },
    title: {
      text: null
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
      color: '#008148',
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
        color: '#0f91a2',
        name: 'Hans-Peter Wessels (SP)',
        y: 48,
        drilldown: 'wessels'
      }, {
        color: '#0f91a2',
        name: 'Lorenz Nägelin (SVP)',
        y: 40,
        drilldown: 'naegelin'
      }, {
        color: '#0f91a2',
        name: 'Elisabeth Ackermann (Grüne)',
        y: 40,
        drilldown: 'ackermann'
      }, {
        color: '#0f91a2',
        name: 'Heidi Mück (Basta!)',
        y: 32,
        drilldown: 'mueck'
      }, {
        color: '#0f91a2',
        name: 'Martina Bernasconi (glp)',
        y: 21,
        drilldown: 'bernasconi'
      }, {
        color: '#0f91a2',
        name: 'Andere',
        y: 17
      }
      ]
    }],
    drilldown: {
      drillUpButton: {
        relativeTo: 'spacingBox',
        position: {
          y: -30,
          x: 0
        },
        theme: {
          fill: 'white',
          'stroke-width': 1,
          stroke: 'black',
          r: 3,
          states: {
            hover: {
              fill: '#bada55'
            },
            select: {
              stroke: '#039',
              fill: '#bada55'
            }
          }
        }
      },
      series: [{
        id: 'herzog',
        data: [
          ['SP', 96],
          ['EVP', 84],
          ['BGB', 83],
          ['BDP', 71],
          ['glp', 64],
          ['CVP', 57],
          ['LDP', 43],
          ['FDP', 23],
          ['SVP', 19]
        ]
      }, {
        id: 'cramer',
        data: [
          ['FDP', 99],
          ['LDP', 98],
          ['BDP', 97],
          ['CVP', 93],
          ['SVP', 82],
          ['glp', 77],
          ['EVP', 45],
          ['SP', 24],
          ['BGB', 9]
        ]
      }, {
        id: 'brutschin',
        data: [
          ['SP', 94],
          ['BGB', 84],
          ['EVP', 70],
          ['glp', 63],
          ['CVP', 40],
          ['BDP', 39],
          ['LDP', 35],
          ['FDP', 20],
          ['SVP', 11]
        ]
      }, {
        id: 'engelberger',
        data: [
          ['CVP', 100],
          ['FDP', 96],
          ['LDP', 92],
          ['SVP', 73],
          ['BDP', 68],
          ['glp', 64],
          ['EVP', 45],
          ['SP', 25],
          ['BGB', 12]
        ]
      }, {
        id: 'duerr',
        data: [
          ['FDP', 94],
          ['CVP', 84],
          ['LDP', 83],
          ['SVP', 76],
          ['EVP', 58],
          ['BDP', 56],
          ['glp', 53],
          ['SP', 19],
          ['BGB', 8]
        ]
      }, {
        id: 'wessels',
        data: [
          ['SP', 95],
          ['BGB', 80],
          ['glp', 58],
          ['EVP', 50],
          ['BDP', 35],
          ['CVP', 13],
          ['LDP', 9],
          ['FDP', 7],
          ['SVP', 5]
        ]
      }, {
        id: 'naegelin',
        data: [
          ['SVP', 92],
          ['FDP', 78],
          ['LDP', 75],
          ['BDP', 63],
          ['CVP', 54],
          ['glp', 32],
          ['EVP', 31],
          ['SP', 1],
          ['BGB', 0]
        ]
      }, {
        id: 'ackermann',
        data: [
          ['BGB', 89],
          ['SP', 78],
          ['EVP', 59],
          ['glp', 39],
          ['BDP', 16],
          ['CVP', 7],
          ['LDP', 4],
          ['FDP', 1],
          ['SVP', 0]
        ]
      }, {
        id: 'mueck',
        data: [
          ['BGB', 75],
          ['SP', 64],
          ['EVP', 30],
          ['glp', 13],
          ['LDP', 6],
          ['CVP', 2],
          ['FDP', 1],
          ['SVP', 1],
          ['BDP', 0]
        ]
      }, {
        id: 'bernasconi',
        data: [
          ['glp', 93],
          ['EVP', 30],
          ['SP', 27],
          ['LDP', 19],
          ['BGB', 18],
          ['CVP', 12],
          ['BDP', 11],
          ['SVP', 8],
          ['FDP', 8]
        ]
      }

      ]
    }
  });
});




