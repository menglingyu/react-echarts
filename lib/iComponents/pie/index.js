'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('../../base');

var _base2 = _interopRequireDefault(_base);

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('echarts/lib/chart/pie');

require('echarts/lib/component/tooltip');

require('echarts/lib/component/title');

require('echarts/lib/component/toolbox');

require('echarts/lib/component/visualMap');

require('echarts/lib/component/grid');

require('echarts/lib/component/timeline');

require('echarts/lib/component/graphic');

require('echarts/lib/component/calendar');

require('echarts/lib/component/markPoint');

require('echarts/lib/component/markLine');

require('echarts/lib/component/markArea');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = function (_BaseModule) {
  _inherits(Pie, _BaseModule);

  function Pie() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pie);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pie.__proto__ || Object.getPrototypeOf(Pie)).call.apply(_ref, [this].concat(args))), _this), _this.baseOption = {
      title: {
        text: '222'
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
    }, _this.processDataPie = function (type) {
      var _this$props = _this.props,
          settings = _this$props.settings,
          data = _this$props.data,
          title = _this$props.title;

      if (settings && settings.series) {
        try {
          settings.series[0].type = 'pie';
          settings.series[0].name = title || '';
          var processData = data.map(function (item) {
            var newItem = {};
            newItem.value = item.data;
            newItem.name = item.name;
            return newItem;
          });
          var copyNewSeries = JSON.parse(JSON.stringify(settings.series[0]));
          copyNewSeries.data = processData;
          return copyNewSeries;
        } catch (error) {
          console.log(error);
          console.log("settings格式不正确");
        }
      } else {
        var newData = data.map(function (item) {
          return {
            name: item.name,
            value: item.data
          };
        });
        return [{
          name: _this.title,
          type: 'pie',
          selectedMode: 'single',
          label: {
            normal: {
              position: 'inner'
            }
          },
          data: newData
        }];
      }
    }, _this.processOption = function (option) {
      option.title = _this.title;
      option.legend = _this.legend;
      option.series = _this.processDataPie('pie');
      return option;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Pie;
}(_base2.default);

exports.default = Pie;