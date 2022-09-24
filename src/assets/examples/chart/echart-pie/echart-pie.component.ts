import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echart-pie',
  templateUrl: './echart-pie.component.html',
  styleUrls: ['./echart-pie.component.scss']
})
export class EchartPieComponent {
  pieOptions = {
    backgroundColor: '#ffffff',

    // title: {
    //     text: 'Basic Pie',
    //     left: 'center',
    //     top: 10,
    //     textStyle: {
    //         color: '#000000',
    //     }
    // },

    grid: {
      left: "3%",
      right: "4%",
      top: "3%",
      containLabel: true
    },
    color: [
      "rgba(15, 21, 77, .6)",
      // "rgba(244, 67, 54, .7)",
      "rgba(15, 21, 77, 0.7)",
      "rgba(15, 21, 77, 0.8)"
    ],
    tooltip: {
      show: false,
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    xAxis: [
      {
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],

    series: [
      {
        name: "Sessions",
        type: "pie",
        radius: ["0%", "65%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            // position: "center",
            textStyle: {
              fontSize: "13",
              fontWeight: "normal"
            },
            formatter: "{a}"
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "15",
              fontWeight: "normal",
              color: "rgba(15, 21, 77, 1)"
            },
            formatter: "{b} \n{c} ({d}%)"
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 335,
            name: "Direct"
          },
          {
            value: 310,
            name: "Search Eng."
          },
          { value: 148, name: "Social" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  doughNutPieOptions = {
    backgroundColor: '#ffffff',

    // title: {
    //     text: 'Doughnut Pie',
    //     left: 'center',
    //     top: 20,
    //     textStyle: {
    //         color: '#000000'
    //     }
    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    color: [
      "rgba(15, 21, 77, .6)",
      // "rgba(244, 67, 54, .7)",
      "rgba(15, 21, 77, 0.7)",
      "rgba(15, 21, 77, 0.8)"
    ],
    tooltip: {
      show: false,
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    xAxis: [
      {
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],

    series: [
      {
        name: "Sessions",
        type: "pie",
        radius: ["45%", "65%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            // position: "center",
            textStyle: {
              fontSize: "13",
              fontWeight: "normal"
            },
            formatter: "{a}"
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "15",
              fontWeight: "normal",
              color: "rgba(15, 21, 77, 1)"
            },
            formatter: "{b} \n{c} ({d}%)"
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 335,
            name: "Direct"
          },
          {
            value: 310,
            name: "Search Eng."
          },
          { value: 148, name: "Social" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  customPieOptions = {
    backgroundColor: '#ffffff',
    color: ['#3CB2EF','#71F6F9', '#FFDB5C', '#FFAE8B', '#E062AE','#2C3162',  '#6F7394', '#FFFFFF','#F44336'],
    // title: {
    //     text: 'Customized Pie',
    //     left: 'center',
    //     top: 20,
    //     textStyle: {
    //         color: '#ccc'
    //     }
    // },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'Production',
            type:'pie',
            radius : '65%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'Potato'},
                {value:310, name:'Mango'},
                {value:274, name:'Banana'},
                {value:235, name:'Strawberry'},
                {value:400, name:'Jackfruit'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0 , 0, 0, 0.87)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0 , 0, 0, 0.87)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#2C3162',
                    // shadowBlur: 200,
                    // shadowColor: 'rgba(15, 21, 77, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

nestedPieOptions = {
//   title: {
//     text: 'Nested Pie',
//     left: 'center',
//     top: 0,
//     textStyle: {
//         color: '#000000'
//     }
// },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['rgba(15, 21, 77, 0.8)','rgba(246,107,191, 0.8)','#03A9F4','#FFC107','rgba(15, 21, 77, 0.6)','#9C27BB','rgba(15, 21, 77, 0.4)','rgba(146, 213, 249, 0.8)','#9C27B0'],
    legend: {
      textStyle: {
        color: 'rgba(0,0,0,0.87)'
      },
        orient: 'horizontal',
        x: 'left',
        data:['Banana','Mango','Jackfruit','Pineapple','Strawberry','Respberry','Blackberry','Litchi','Guava','Watermelon']
    },
    series: [
        {
            name:'Inner Pie',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'Banana', selected:true},
                {value:679, name:'Mango'},
                {value:1548, name:'Jackfrui'}
            ],
            itemStyle: {
              normal: {
                
                  // shadowBlur: 200,
                  // shadowColor: 'rgba(15, 21, 77, 0.5)'
              }
          },
        },
        {
            name:'Outer Pie',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: 'rgba(0,0,0,0.67)',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: 'rgba(0,0,0,0.67)',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: 'rgba(0,0,0,0.67)',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#ccc',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'Orange'},
                {value:310, name:'Banana'},
                {value:234, name:'Litchi'},
                {value:135, name:'Dragon fruit'},
                {value:1048, name:'Pineapple'},
                {value:251, name:'Mango'},
                {value:147, name:'Apricot'},
                {value:102, name:'Avocado'}
            ],
            itemStyle: {
              normal: {
                  // shadowBlur: 200,
                  // shadowColor: 'rgba(15, 21, 77, 0.5)'
              }
          },
        }
    ]
};
}
