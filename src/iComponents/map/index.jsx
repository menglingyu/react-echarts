import React, { Component } from 'react';
import BaseModule from '../../base'
import 'echarts/lib/chart/map'
import { mapOption } from '../../../mock/mapConfig'
// import { barOption } from '../../../mock/barConfig'
// import { pieOption } from '../../../mock/pieConfig'

let mapBaseOption = {
  title: {
    text: '$堆叠区域图'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['$邮件营销', '$联盟广告', '$视频广告', '$直接访问', '$搜索引擎']
  },
  grid: {
    // left: '3%',
    // right: '4%',
    // bottom: '3%',
  },
  series: []
}

const mapRule = {
  title: true,
  legend: true,
  grid: true,
  xAxis: true,
  data: true,
  settings: true
}

class map extends BaseModule {

  state = {
    mapBaseOption: mapBaseOption
  }

  get title() {
    const { title } = this.props
    return typeof title === 'string' ? { text: title } : title
  }
  get legend() {
    const { data, legend, settings } = this.props
    if (settings) {
      if (!!settings.legend && legend === true && data instanceof Array && data.length > 0) {
        settings.legend.data = data.map((item) => item.name)
        return settings.legend
      }
    }
    else {
      return {
        data: data && data.length > 0 ? data.map((item) => item.name) : false
      }
    }
  }

  get grid() {
    const { grid } = this.props
    if (!grid) {
      return false
    }
    return {
      top: grid[0],
      right: grid[1],
      bottom: grid[2],
      left: grid[3],
    }
  }

  get data() {
    const { data } = this.props
    return !data ? [] : 'map'
  }

  config = () => {
    let option = mapOption
    console.log(mapOption)
    this.changeEchartDom(option)
  }
}
export default map;

