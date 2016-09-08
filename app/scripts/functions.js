// function for tabs

$(function(){$("#tabs").tabs({hide:{effect:"fade",duration:300},show:{effect:"fade",duration:300}})});


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
      spacingTop: 0,
      events: {
        drilldown: function (e) {
          this.setTitle({text: e.point.name});
          this.yAxis[0].axisTitle.attr({
            text: 'Stimmenanteile der Regierungskandidaten nach Partei' });
        },
        drillup: function() {
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

    credits: {
      enabled: false
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
        color: '#00b766',
        name: 'Hans-Peter Wessels (SP)',
        y: 48,
        drilldown: 'wessels'
      }, {
        color: '#00b766',
        name: 'Lorenz Nägelin (SVP)',
        y: 40,
        drilldown: 'naegelin'
      }, {
        color: '#00b766',
        name: 'Elisabeth Ackermann (Grüne)',
        y: 40,
        drilldown: 'ackermann'
      }, {
        color: '#00b766',
        name: 'Heidi Mück (Basta!)',
        y: 32,
        drilldown: 'mueck'
      }, {
        color: '#00b766',
        name: 'Martina Bernasconi (glp)',
        y: 21,
        drilldown: 'bernasconi'
      }, {
        color: '#00b766',
        name: 'Andere',
        y: 17
      }
      ]
    }],
    drilldown: {
      drillUpButton: {
        relativeTo: 'spacingBox',
        position: {
          y: -5,
          x: 0
        },
        theme: {
          fill: 'white',
          'stroke-width': 1,
          stroke: 'black',
          r: 3,
          states: {
            hover: {
              fill: '#efefef'
            },
            select: {
              stroke: '#efefef',
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
          ['GB', 83],
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
          ['GB', 9]
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


// parlament chart

$(function () {
  $('#parlament_chart').highcharts({
    exporting: {
      enabled: false
    },

    chart: {
      type: 'bar'
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['SP', 'SVP', 'LDP', 'FDP', 'BGB', 'CVP', 'glp', 'BDP', 'EVP', 'VA', 'EDU', 'Andere' ],
      title: {
        text: null
      },
      opposite: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Wähleranteile der Parteien'
      },
      reversed: true,
      labels: {
        overflow: 'justify',
        formatter: function() {
          return this.value+"%";
        }
      }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
      bar: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0.1,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      color: '#008148',
      name: 'Umfrage 2016',
      data: [30.25, 16.85, 12.81, 11.53, 10.34, 6.9, 3.84, 1.18, 3.94, 0.59, 0.49, 1.28]
    }, {
      color: '#00b766',
      name: 'Wahlen 2012',
      data: [30.7, 15, 9.6, 11.1, 11.8, 7.3, 5, 1.1, 4.2, 1.2, 0.4, 2.5]
    }, {
      color: '#00e07d',
      name: 'Wahlen 2008',
      data: [29.7, 13.7, 8.4, 9.9, 13.8, 9.3, 5.1, 0, 4.4, 0, 2.4, 3.3]
    }]
  });
});


//regierungspräsidium chart

$(function () {
  $('#praesidium').highcharts({
    exporting: {
      enabled: false
    },
    chart: {
      type: 'column'
    },
    title: {
      text: null
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      labels: {
        overflow: 'justify',
        formatter: function () {
          return this.value + "%";
        }
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      color: '#008148',
      data: [{
        name: 'Baschi Dürr',
        y: 44
      }, {
        name: 'Elisabeth Ackermann',
        y: 30
      }, {
        name: 'Martina Bernasconi',
        y: 8
      }, {
        name: 'Andere',
        y: 18
      }
      ]
    }]
  });
});

// sorgenbarometer 1, zusammenleben

$(function () {
  $('#sorgen1').highcharts({
    exporting: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    chart: {
      type: 'bar'
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['«Es hat zu viele Ausländer und Ausländerinnen in der Stadt.»', '«Die Menschen in der Stadt begegnen einander zunehmend mit sozialer Kälte.»', '«Der Kanton Baselland profitiert übermässig von der Stadt Basel.»', '«Die kantonalen Krankenkassenprämien sind zu hoch.»', '«Die Steuern im Kanton sind zu hoch.»', '«Die Arbeitsplatzsicherheit bereitet mir Sorgen.»', '«Der Bund kümmert sich zu wenig um Basler Probleme.»']
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      labels: {
        formatter: function () {
        return this.value + "%";
        }
      }
    },
    legend: {
      reversed: true,
      align: 'right'
    },
    plotOptions: {
      series: {
        stacking: 'percent',
          point: {
            events: {
              mouseOver: function (e) {
                this.dataLabel.css({
                  opacity: "1"
                });
              },
              mouseOut: function (e) {
                this.dataLabel.css({
                  opacity: "0"
                });
              }
            }
          },
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
          style: {
            opacity: "0"
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        color: '#00e07d',
        name: 'sehr einverstanden',
        data: [22.6, 17.6, 41.7, 68.5, 37.7, 19.9, 37.5]
      }, {
        color: '#00b766',
        name: '4',
        data: [11.8, 29.3, 28.6, 21.4, 22.6, 22.1, 28.3]
      }, {
        color: '#008148',
        name: '3',
        data: [17.6, 28.7, 17.7, 6.6, 21.8, 27.4, 21.9]
      }, {
      color: '#005831',
      name: '2',
      data: [16.7, 15.5, 7.8, 1.7, 10.7, 16.8, 9.1]
    }, {
        color: '#00371f',
        name: 'gar nicht einverstanden',
        data: [31.3, 8.8, 4.2, 1.9, 7.2, 13.8, 3.3]
      }
    ]
  });
});


// sorgenbarometer 2, das Leben in der Stadt

$(function () {
  $('#sorgen2').highcharts({
    exporting: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    chart: {
      type: 'bar'
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['«Das Lädeli-Sterben in der Stadt ist ein Problem.»', '«Es hat zu viel motorisierten Verkehr auf den Strassen.»', '«In der Stadt ist es zu wenig sauber.»', '«Es gibt zu wenige Grünflächen zum Erholen in der Stadt.»', '«Im öffentlichen Raum fühle ich mich unsicher.»', '«In der Stadt hat es zu viel Lärm.»'],
      opposite: true
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      reversed: true,
      labels: {
        formatter: function () {
          return this.value + "%";
        }
      }
    },
    legend: {
      align: 'left'
    },
    plotOptions: {
      series: {
        stacking: 'percent',
        point: {
          events: {
            mouseOver: function (e) {
              this.dataLabel.css({
                opacity: "1"
              });
            },
            mouseOut: function (e) {
              this.dataLabel.css({
                opacity: "0"
              });
            }
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
          style: {
            opacity: "0"
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        color: '#00e07d',
        name: 'sehr einverstanden',
        data: [36.1, 13.7, 16.3, 13.4, 9.1, 16.7]
      }, {
        color: '#00b766',
        name: '4',
        data: [29.9, 18.1, 18.2, 16.6, 17, 13.3]
      }, {
        color: '#008148',
        name: '3',
        data: [18.2, 25.5, 20.5, 27.7, 26, 14.7]
      }, {
        color: '#005831',
        name: '2',
        data: [8.6, 22.2, 18.9, 22.8, 26.7, 25.8]
      }, {
        color: '#00371f',
        name: 'gar nicht einverstanden',
        data: [7.2, 20.6, 26, 19.4, 21.2, 29.5]
      }
    ]
  });
});

$(function(){
        $('#menu').slicknav();
    });