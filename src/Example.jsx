import React from 'react'
import { Modal, Button, Checkbox, Row, Col, Spin } from 'igroot'
import Line from './iComponents/line'
import Bar from './iComponents/bar'
import Pie from './iComponents/pie'
import Map from './iComponents/map'
import Scatter from './iComponents/scatter'
import MixChart from './iComponents/mixCharts'

import echarts from 'echarts/lib/echarts'
import { lineOption } from '../mock/lineConfig'  
import { barOption } from '../mock/barConfig'
import { pieOption } from '../mock/pieConfig'
import { mapOption } from '../mock/mapConfig'
import { scatterOption } from '../mock/scatterConfig'

export default class Example extends React.Component {

  getEchartFun = (a) => {
    a.on('legendselectchanged', function (parmas) {
    })
  }
  getMixChart = (option, params, charts) => {
    console.log(params, charts, "oooo", option)
    // charts.on('legendselectchanged', function (parmas) {
    //   console.log("!11")
    // })
  }

  onChartClick = (e) => {
    console.log(e,"!!!")
  }
  aaa = (a,b,c) => {
    const sss = document.getElementById("aaasss")
    console.log(echarts.getInstanceByDom(sss))
  }
  coverFirstLineInstance = null
  render() {
    return (
      <div>
        <div onClick={this.aaa}>
          222
        </div>
        <Row>
          <Col>
            {/* <Scatter
              id={"sad"}
              title={"Scatter"}
              legend={true}
              xAxis={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
              data={[
                {
                  name: 'cnm',
                  data: [['周二', 20, 30], ['周一', 10, 30], ['周三', 30, 30]],
                },
                {
                  name: 'cnmm',
                  data: [['周三', 60, 30], ['周四', 50, 30], ['周五', 40, 30]],
                }
              ]}
            /> */}
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Line
              title={"22222"}
              legend={true}
              xAxis={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
              data={[
                {
                  name: 'mmm',
                  data: [12, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: 'mmm1',
                  data: [510, 12, 1, 54, 40, 30, 10]
                },
                {
                  name: '222',
                  data: [410, 12, 1, 54, 40, 30, 10]
                }
              ]}
              getChart={this.getChart}
              settings={
                {
                  tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                      return [pt[0], '10%'];
                    }
                  },
                  title: {
                    left: 'center',
                    text: '大数据量面积图',
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: 'none'
                      },
                      restore: {},
                      saveAsImage: {}
                    }
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: {}
                  },
                  yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                  },
                  dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                  }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                      color: '#fff',
                      shadowBlur: 3,
                      shadowColor: 'rgba(0, 0, 0, 0.6)',
                      shadowOffsetX: 2,
                      shadowOffsetY: 2
                    }
                  }],
                  series: [
                    {
                      name: '模拟数据',
                      type: 'line',
                      smooth: true,
                      symbol: 'none',
                      sampling: 'average',
                      itemStyle: {
                        normal: {
                          color: 'rgb(255, 70, 131)'
                        }
                      },
                      areaStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                          }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                          }])
                        }
                      },
                      data:[]
                    }
                  ]
                }
              }
            />
          </Col>
        </Row> */}
        {/* <Row>
          <Col>
            <Bar
              id={"aaac"}
              title={"title1"}
              legend={true}
              xAxis={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
              data={[
                {
                  // id:'bar1',
                  name: 'mmm',
                  data: [110, 112, 101, 134, 90, 230, 210],
                },
                {
                  // id:'bar2',
                  name: 'mm2m',
                  data: [110, 112, 101, 134, 90, 230, 210],
                }
              ]}
            />
          </Col>
        </Row> */}
        {/* <Row>
          <Col>
            <Pie
              id={"aaad"}
              title={"titlssse1"}
              legend={true}
              data={[
                {
                  name: 'aaa',  
                  data: '532'
                },
                {
                  name: 'bbb',
                  data: '132'
                },
                {
                  name: 'ccc',
                  data: '150'
                },
              ]}
            />
          </Col>
        </Row> */}
        {/* <Row>
          <Col>
            <ReactEchartsCore
              echarts={echarts}
              style={{ height: '500px', width: '800px' }}
              option={lineOption}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              // onChartReady={this.onChartReadyCallback}
              onEvents={onEvents} />
          </Col>
        </Row> */}
        <MixChart 
          id = "aaasss"
          legendselectchanged= {this.getMixChart.bind(this,"SSS")}
          notMerge={false}
          style={{
            width: '800px',
            height: '500px'
          }}
          settings={
            {
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
              },
              series: [
                {
                  name: '访问来源111',
                  type: 'pie',
                  selectedMode: 'single',
                  radius: [0, '30%'],

                  label: {
                    normal: {
                      position: 'inner'
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data: [
                    { value: 335, name: '直达', selected: true },
                    { value: 679, name: '营销广告' },
                    { value: 1548, name: '搜索引擎' }
                  ]
                },
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: ['40%', '55%'],
                  label: {
                    normal: {
                      formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                      backgroundColor: '#eee',
                      borderColor: '#aaa',
                      borderWidth: 1,
                      borderRadius: 4,
                      // shadowBlur:3,
                      // shadowOffsetX: 2,
                      // shadowOffsetY: 2,
                      // shadowColor: '#999',
                      // padding: [0, 7],
                      rich: {
                        a: {
                          color: '#999',
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
                          borderColor: '#aaa',
                          width: '100%',
                          borderWidth: 0.5,
                          height: 0
                        },
                        b: {
                          fontSize: 16,
                          lineHeight: 33
                        },
                        per: {
                          color: '#eee',
                          backgroundColor: '#334455',
                          padding: [2, 4],
                          borderRadius: 2
                        }
                      }
                    }
                  },
                  data: [
                    { value: 335, name: '直达' },
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1048, name: '百度' },
                    { value: 251, name: '谷歌' },
                    { value: 147, name: '必应' },
                    { value: 102, name: '其他' }
                  ]
                }
              ]
            }
          }
        />
      </div>
    )
  }
}
