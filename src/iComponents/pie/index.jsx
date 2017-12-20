import React, { Component } from 'react'
import BaseModule from '../../base'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/timeline'
import 'echarts/lib/component/graphic'
import 'echarts/lib/component/calendar'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markArea'


class Pie extends BaseModule {
  baseOption = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: []
    },

    grid: {
      // left: '3%',
      // right: '4%',
      // bottom: '3%',
    },
    series: []
  }

  processDataPie = (type) => {
    let { settings, data, title } = this.props
    if (settings && settings.series) {
      try {
        settings.series[0].type = 'pie'
        settings.series[0].name = title || ''
        const processData = data.map(item => {
          const newItem ={}
          newItem.value = item.data
          newItem.name = item.name
          return newItem
        })
        const copyNewSeries = JSON.parse(JSON.stringify(settings.series[0]))
        copyNewSeries.data = processData
        return copyNewSeries
      } catch (error) {
        console.log(error)
        console.log("settings格式不正确")
      }
    }
    else {
      const newData = data.map(item => {
        return {
          name: item.name,
          value: item.data
        }
      })
      return [{
        name: this.title,
        type: 'pie',
        selectedMode: 'single',
        label: {
          normal: {
            position: 'inner'
          }
        },
        data: newData
      }]
    }
  }
  
  processOption = (option) => {
    option.title = this.title
    option.legend = this.legend
    option.series = this.processDataPie('pie')
    return option
  }
}
export default Pie