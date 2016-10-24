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
        drillUpText: '◁ Zurück'
      },

      chart: {
        type: 'bar',
        spacingTop: 10,
        
      },
      title: {
        text: null
      },

      xAxis: {
        type: 'category'
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 380,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
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
        name: '1. Umfrage',
        color: '#00b766',
        data: [{
          name: 'Eva Herzog (SP)',
          y: 63
          
        }, {
          name: 'Conradin Cramer (LDP)',
          y: 59
          
        }, {
          name: 'Christoph Brutschin (SP)',
          y: 56
          
        }, {
          name: 'Lukas Engelberger (CVP)',
          y: 56
          
        }, {
          name: 'Baschi Dürr (FDP)',
          y: 51
          
        }, {
          name: 'Hans-Peter Wessels (SP)',
          y: 48
          
        }, {
          name: 'Elisabeth Ackermann (Grüne)',
          y: 40
          
        }, {
          name: 'Lorenz Nägelin (SVP)',
          y: 40
          
        }, {
          name: 'Heidi Mück (Basta!)',
          y: 32
          
        }, {
          name: 'Martina Bernasconi (glp)',
          y: 21
        }
        ]
      },
        {
          name: '2. Umfrage',
          color: '#008148',
          data: [{
            name: 'Eva Herzog (SP)',
            y: 63
          }, {
            name: 'Conradin Cramer (LDP)',
            y: 59
          }, {
            name: 'Christoph Brutschin (SP)',
            y: 58
          }, {
            name: 'Lukas Engelberger (CVP)',
            y: 56
          }, {
            name: 'Baschi Dürr (FDP)',
            y: 51
          }, {
            name: 'Hans-Peter Wessels (SP)',
            y: 47
          }, {
            name: 'Elisabeth Ackermann (Grüne)',
            y: 45
          }, {
            name: 'Lorenz Nägelin (SVP)',
            y: 42
          }, {
            name: 'Heidi Mück (Basta!)',
            y: 35
          }, {
            name: 'Martina Bernasconi (glp)',
            y: 21
          }
          ]
        },
              
              {
          name: 'Wahlergebnisse',
          color: '#00371F',
          data: [{
            name: 'Eva Herzog (SP)',
            y: 71
          }, {
            name: 'Conradin Cramer (LDP)',
            y: 51
          }, {
            name: 'Christoph Brutschin (SP)',
            y: 63
          }, {
            name: 'Lukas Engelberger (CVP)',
            y: 57
          }, {
            name: 'Baschi Dürr (FDP)',
            y: 45
          }, {
            name: 'Hans-Peter Wessels (SP)',
            y: 48
          }, {
            name: 'Elisabeth Ackermann (Grüne)',
            y: 50
          }, {
            name: 'Lorenz Nägelin (SVP)',
            y: 37
          }, {
            name: 'Heidi Mück (Basta!)',
            y: 38
          }, {
            name: 'Martina Bernasconi (glp)',
            y: 30
          }
          ]
        }
              
              ]
      
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
        categories: ['SP', 'SVP', 'LDP', 'FDP', 'GB', 'CVP', 'glp', 'BDP*', 'EVP', 'VA*', 'EDU*', 'Andere' ],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: "Wähleranteile der Parteien"
        },
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
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [
          {
        color: '#00371F',
        name: 'Wahlen 2016',
        data: [32.5, 14.3, 13.8, 9.2, 13.4, 5.9, 4.3, 2.6, 1.4, 1, 0.1, 0.9]
      },
          {
        color: '#008148',
        name: '2. Umfrage 2016',
        data: [30.4, 17.4, 12.8, 10.4, 10.6, 6.5, 4.5, 0, 3.94, 0, 0, 3.2]
      }, {
        color: '#00b766',
        name: '1. Umfrage 2016',
        data: [30.25, 16.85, 12.81, 11.53, 10.34, 6.9, 3.84, 1.18, 3.94, 0.59, 0.49, 1.28]
      }, {
        color: '#00e07d',
        name: 'Wahlen 2012',
        data: [30.7, 15, 9.6, 11.1, 11.8, 7.3, 5, 1.1, 4.2, 1.2, 0.4, 2.5]
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
        categories: ['Baschi Dürr', 'Elisabeth Ackermann', 'Martina Bernasconi', 'Andere', 'Christian Mueller', 'Eric Weber'],
        title: {
          text: null
        }
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
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 10,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
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
        color: '#00b766',
        name: '1. Umfrage',
        data: [44, 30, 8, 18, 0, 0]
      }, {
        color: '#008148',
        name: '2. Umfrage',
        data: [41, 37, 8, 7, 3, 3]
      },
       {
        color: '#00371F',
        name: 'Wahlergebnisse',
        data: [30, 38, 8, 2, 3, 3]
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
      categories: ['«Es hat zu viele Ausländer und Ausländerinnen in der Stadt.»', '«Das Lädeli-Sterben in der Stadt ist ein Problem.»', '«Der Kanton Baselland profitiert übermässig von der Stadt Basel.»', '«Die kantonalen Krankenkassenprämien sind zu hoch.»', '«Im öffentlichen Raum fühle ich mich unsicher.»', '«In der Stadt hat es zu wenige Parkplätze»']
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
        data: [22.6, 36.1, 41.7, 68.5, 16.7, 35.4]
      }, {
        color: '#00b766',
        name: '4',
        data: [11.8, 29.9, 28.6, 21.4, 13.3, 12.5]
      }, {
        color: '#008148',
        name: '3',
        data: [17.6, 18.2, 17.7, 6.6, 14.7, 13.8]
      }, {
      color: '#005831',
      name: '2',
      data: [16.7, 8.6, 7.8, 1.7, 25.8, 12.5]
    }, {
        color: '#00371f',
        name: 'gar nicht einverstanden',
        data: [31.3, 7.2, 4.2, 1.9, 29.5, 25.8]
      }
    ]
  });
});

iFrameResize();
