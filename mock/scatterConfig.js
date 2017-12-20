var dataBJ = [
    [1, 55, 9, 56, 0.46, 18, 6, "良"],
    [2, 25, 11, 21, 0.65, 34, 9, "优"],
    [3, 56, 7, 63, 0.3, 14, 5, "良"],
];

var dataGZ = [
    [1, 26, 37, 27, 1.163, 27, 13, "优"],
    [2, 85, 62, 71, 1.195, 60, 8, "良"],
    [3, 78, 38, 74, 1.363, 37, 7, "良"],
];

var dataSH = []
  

var schema = [
    { name: 'date', index: 0, text: '日' },
    { name: 'AQIindex', index: 1, text: 'AQI指数' },
    { name: 'PM25', index: 2, text: 'PM2.5' },
    { name: 'PM10', index: 3, text: 'PM10' },
    { name: 'CO', index: 4, text: '一氧化碳（CO）' },
    { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
    { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

export const scatterOption = {
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        y: 'top',
        data: ['北京', '上海', '广州'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ' + value[0] + '日：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
        }
    },
    // xAxis: {
    //     type: 'value',
    //     name: '日期',
    //     nameGap: 16,
    //     nameTextStyle: {
    //         color: '#fff',
    //         fontSize: 14
    //     },
    //     max: 31,
    //     splitLine: {
    //         show: false
    //     },
    //     axisLine: {
    //         lineStyle: {
    //             color: '#eee'
    //         }
    //     }
    // },
    // yAxis: {
    //     type: 'value',
    //     name: 'AQI指数',
    //     nameLocation: 'end',
    //     nameGap: 20,
    //     nameTextStyle: {
    //         color: '#fff',
    //         fontSize: 16
    //     },
    //     axisLine: {
    //         lineStyle: {
    //             color: '#eee'
    //         }
    //     },
    //     splitLine: {
    //         show: false
    //     }
    // },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：PM2.5'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        },
        // {
        //     left: 'right',
        //     bottom: '5%',
        //     dimension: 6,
        //     min: 0,
        //     max: 50,
        //     itemHeight: 120,
        //     calculable: true,
        //     precision: 0.1,
        //     text: ['明暗：二氧化硫'],
        //     textGap: 30,
        //     textStyle: {
        //         color: '#fff'
        //     },
        //     inRange: {
        //         colorLightness: [1, 0.5]
        //     },
        //     outOfRange: {
        //         color: ['rgba(255,255,255,.2)']
        //     },
        //     controller: {
        //         inRange: {
        //             color: ['#c23531']
        //         },
        //         outOfRange: {
        //             color: ['#444']
        //         }
        //     }
        // }
    ],
    series: [
        {
            name: '北京',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
        }
    ]
};