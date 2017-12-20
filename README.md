# igroot-charts 图表库
> 详情

## 使用方法:
```
npm install igoot-charts

```
然后在想要引入的界面里
import { Line } from 'igroot-charts'
可选的图表:
 - Line：折线图
 - Pie：饼图
 - Scatter：散点图
 - Bar：柱状图

## 折线图
```
<Line
  id={"line"}
  title={"title"} /* 非必填 */
  legend={true} /* 非必填 */
  xAxis={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
  data={[
    {
      name: 'mmm',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]}
  settings={lineOption}
/>
```
## 柱状图
```
<Bar
  id={"bar"}
  title={"title1"}
  legend={true}
  xAxis={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
  data={[
    {
      name: 'mmm',
      data: [110, 112, 101, 134, 90, 230, 210],
    }
  ]}
  settings={barOption}
/>
```
<!-- xAxis 中 代表的是X轴数据。Y轴默认为数据的值，由于符合95%场景，所以暂时没留出配置口 -->
<!-- data 中 一个对象代表一条线，name就是这条线的名字 -->
<!-- settings是echarts的配置口，可直接复制echarts文档的配置项，即可实现兼容显示 -->

## 散点图
```
<Scatter
  id={"scatter"}
  title={"Scatter"}
  legend={true}
  xAxis={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
  data={[
    {
      // id:'bar1',
      name: 'cnm',
      data: [['周二', 20, 30], ['周一', 10, 30], ['周三', 30, 30]],
    }
  ]}
  settings={scatterOption}
/>

```
<!-- 配置项里除了data配置项中data的格式不同，其余一样,散点图的data描述的是不同纬度，也就是 点 的位置，格式如图第一项是X轴位置，第二项Y轴其他的是其他纬度 -->

## 饼图
```
<Pie
  id={"pie"}
  title={"title1"}
  legend={true}
  radius = {['40%', '55%']}
  data={[
    {
      name: 'aaa',
      data: '120'
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
  settings={pieOption}
/>
```
<!-- 饼图的数据格式不同，不需要x，y轴，并且data格式如图，radius，调节圆的空心度 -->

## 混合组件

```
<MixChart 
  getChart = {this.getMixChart}  <!-- 这是一个方法，参数是这个组件的chart实例 -->
  notMerge={false}
  style={{
    width: '800px',
    height: '500px'
  }}
  notMerge={false}  <!-- 默认为true -->
  showLoading={true}
/>

```


由于以上的组件都只支持单个图标展示，如果有多个图混合的需求，请使用 <MixChart/> 组件，

这个是完全遵守echarts规则的配置方案，直接拷贝echarts配置项在option属性即可,为了提升性能，需要手动引入各个 echarts包。


# 事件与交互:
 - 可以为组件添加 getEchart 属性 值是一个方法，方法的参数是一个图表实例，(参考Echart对象),
    鼠标事件： 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout' 事件。
    ```
    getChartFun = (chartObj) => {
      <!-- chartObj 参数是chart实例，然后就可以为实例添加事件了 -->
      chartObj.on('click', function (parmas) {
        <!-- parmas 参数是图标的一些信息 -->
        console.log(parmas,"ooo")
      })
    }
    ...
    <Line
      ...
      xAxis={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
      data={[
        ...
      ]}
      getEchart={getChartFun}
    />
    ```
  鼠标事件的参数如下
  ```
  {
    // 当前点击的图形元素所属的组件名称，
    // 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
    componentType: string,
    // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
    seriesType: string,
    // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
    seriesIndex: number,
    // 系列名称。当 componentType 为 'series' 时有意义。
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
    // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
    // 其他大部分图表中只有一种 data，dataType 无意义。
    dataType: string,
    // 传入的数据值
    value: number|Array
    // 数据图形的颜色。当 componentType 为 'series' 时有意义。
    color: string
}
  ```
 -
 -
 -


