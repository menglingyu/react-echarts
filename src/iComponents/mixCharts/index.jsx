import React, { Component } from 'react';
import BaseModule from '../../base'
import echarts from 'echarts'


class MixChart extends BaseModule {
  baseOption = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['$邮件营销', '$联盟广告', '$视频广告', '$直接访问', '$搜索引擎']
    },
    grid: {
    },
    series: []
  }
  
  processOption(option) {
    return option
  }

}
export default MixChart;
