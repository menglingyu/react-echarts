'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('../../base');

var _base2 = _interopRequireDefault(_base);

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('echarts/lib/chart/line');

require('echarts/lib/component/legend');

require('echarts/lib/component/tooltip');

require('echarts/lib/component/title');

require('echarts/lib/component/toolbox');

require('echarts/lib/component/visualMap');

require('echarts/lib/component/grid');

require('echarts/lib/component/timeline');

require('echarts/lib/component/graphic');

require('echarts/lib/component/dataZoom');

require('echarts/lib/component/axisPointer');

require('echarts/lib/component/parallel');

require('echarts/lib/component/singleAxis');

require('echarts/lib/component/calendar');

require('echarts/lib/component/markPoint');

require('echarts/lib/component/markLine');

require('echarts/lib/component/markArea');

var _lineConfig = require('../../../mock/lineConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_BaseModule) {
  _inherits(Line, _BaseModule);

  function Line() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Line);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Line.__proto__ || Object.getPrototypeOf(Line)).call.apply(_ref, [this].concat(args))), _this), _this.baseOption = {
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
      xAxis: [{
        type: 'category'
      }],
      yAxis: [{
        type: 'value'
      }],
      series: []
    }, _this.processData = function (type) {
      var _this$props = _this.props,
          settings = _this$props.settings,
          data = _this$props.data;

      if (settings && settings.series) {
        try {
          return data.map(function (item, index) {
            if (index > settings.series.length - 1) {
              var deepCopy = JSON.parse(JSON.stringify(settings.series[index - 1]));
              settings.series.push(deepCopy);
            }
            settings.series[index].name = item.name;
            settings.series[index].data = item.data || [];
            settings.series[index].type = type;
            return settings.series[index];
          });
        } catch (error) {
          console.log(error);
          console.log("settings格式不正确");
        }
      } else {
        if (!data) {
          return [];
        }
        data.map(function (item, index) {
          item.type = type;
        });
        return data;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Line, [{
    key: 'processOption',
    value: function processOption(option) {
      option.title = this.title;
      option.legend = this.legend;
      option.xAxis = this.xAxis;
      option.yAxis = this.yAxis;
      option.series = this.processData('line');
      return option;
    }
  }]);

  return Line;
}(_base2.default);

exports.default = Line;