import React, { Component } from 'react';
import BaseModule from '../../base'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/timeline'
import 'echarts/lib/component/graphic'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/axisPointer'
import 'echarts/lib/component/parallel'
import 'echarts/lib/component/singleAxis'
import 'echarts/lib/component/calendar'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markArea'
import { barOption } from '../../../mock/barConfig'

class Bar extends BaseModule {
  baseOption = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['']
    },
    grid: {
    },
    xAxis: [
      {
        type: 'category',
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: []
  }

  processData = (type) => {
    let { settings, data } = this.props
    if (settings && settings.series) {
      try {
        return data.map((item, index) => {
          if (index > settings.series.length - 1) {
            const deepCopy = JSON.parse(JSON.stringify(settings.series[index - 1]))
            settings.series.push(deepCopy)
          }
          settings.series[index].name = item.name
          settings.series[index].data = item.data
          settings.series[index].type = type
          return settings.series[index]
        })
      } catch (error) {
        console.log(error)
        console.log("settings格式不正确")
      }
    }
    else {
      if (!data) { return [] }
      data.map((item, index) => {
        item.type = type
      })
      return data
    }
  }

  processOption(option) {
    option.title = this.title
    option.legend = this.legend
    option.xAxis = this.xAxis
    option.yAxis = this.yAxis
    option.series = this.processData('bar')
    return option
  }
}
export default Bar;


