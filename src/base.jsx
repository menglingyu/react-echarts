import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts'

const actions = {
  'click': true,
  'legendselectchanged': true,
  'legendselected': true,
  'legendunselected': true,
  'datarangeselected': true,
  'timelinechanged': true,
  'timelinechanged': true,
  'restore': true,
  'geoselectchanged': true,
  'geoselected': true,
  'geounselected': true,
  'pieselectchanged': true,
  'pieselected': true,
  'mapselectchanged': true,
  'mapselected': true,
  'mapunselected': true,
  'axisareaselected': true,
  'focusnodeadjacency': true,
  'unfocusnodeadjacency': true,
  'brush': true,
  'brushselected': true
}
class BaseModule extends Component {
  Echart = null
  
  state = {
    id: 0
  }

  componentWillMount(){
    this.setState({
      id: this.props.id || new Date().getTime()
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      requestData: nextProps.data,
    })
  }

  get title() {
    const { settings, title } = this.props
    if (settings && settings.title) {
      settings.title.text = title || ''
      return settings.title
    }
    else {
      return {
        text: title || ''
      }
    }
  }

  get xAxis() {
    let { xAxis, settings } = this.props
    if (settings && settings.xAxis) {
      try {
        if (settings.xAxis instanceof Array) {
          settings.xAxis = settings.xAxis[0]
        }
        settings.xAxis.data = xAxis
        return settings.xAxis
      } catch (error) {

      }
    }
    else {
      return !xAxis ? {} : {
        type: 'category',
        data: xAxis
      }
    }
  }

  get yAxis() {
    return [{ type: 'value' }]
  }

  get legend() {
    const { data, legend, settings } = this.props
    if (settings && settings.legend) {
      try {
        settings.legend.data = data.map((item) => item.name)
        return settings.legend
      } catch (error) {
        console.log(error)
        console.log("配置项有误")
      }
    }
    else{
      if (!legend) return false
      return {
        data: data && data.length > 0 ? data.map((item) => item.name) : false
      }
    }
  }

  renderEchartDom () {
    const { id } = this.state
    const { settings, showLoading, loadingOption } = this.props
    const rootId = document.getElementById(id)
    this.Echart = echarts.getInstanceByDom(rootId) || echarts.init(rootId)
   
    if (showLoading) {
      this.Echart.showLoading(loadingOption || null)
    } else {
      this.Echart.hideLoading()
    }
    
    if (settings) {
      this.changeEchartDom(settings)
    } else{
      this.Echart.setOption(this.processOption(this.baseOption))
    }
    for (let x in this.props){
      if (actions[x]) {
        this.Echart.on(`${x}`, (param) => {
          this.props[x](param, this.Echart)
        })
      }
    }
  }

  changeEchartDom = (option) => {
    const { notMerge } = this.props
    const newOption = this.processOption(option)

    this.Echart.setOption(newOption, {
      notMerge: notMerge
    })
  }

  componentDidMount(){
    this.renderEchartDom()
  }

  componentDidUpdate() {
    this.renderEchartDom()
  }

  componentWillUnmount(){
    const chartsElement = document.getElementById(`${this.state.id}`)
    this.Echart.dispose(chartsElement)
  }

  render(){
    const { id } = this.state
    const style = this.props.style || {
      width: '100%',
      height: '500px'
    }

    return (
      <div 
        id={id}
        style={style}
        >
      </div>
    )
  }
}

export default BaseModule 