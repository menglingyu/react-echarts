'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _igroot = require('igroot');

var _line = require('./iComponents/line');

var _line2 = _interopRequireDefault(_line);

var _bar = require('./iComponents/bar');

var _bar2 = _interopRequireDefault(_bar);

var _pie = require('./iComponents/pie');

var _pie2 = _interopRequireDefault(_pie);

var _map = require('./iComponents/map');

var _map2 = _interopRequireDefault(_map);

var _scatter = require('./iComponents/scatter');

var _scatter2 = _interopRequireDefault(_scatter);

var _mixCharts = require('./iComponents/mixCharts');

var _mixCharts2 = _interopRequireDefault(_mixCharts);

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _lineConfig = require('../mock/lineConfig');

var _barConfig = require('../mock/barConfig');

var _pieConfig = require('../mock/pieConfig');

var _mapConfig = require('../mock/mapConfig');

var _scatterConfig = require('../mock/scatterConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.getEchartFun = function (a) {
      a.on('legendselectchanged', function (parmas) {});
    }, _this.getMixChart = function (option, params, charts) {
      console.log(params, charts, "oooo", option);
      // charts.on('legendselectchanged', function (parmas) {
      //   console.log("!11")
      // })
    }, _this.onChartClick = function (e) {
      console.log(e, "!!!");
    }, _this.aaa = function (a, b, c) {
      var sss = document.getElementById("aaasss");
      console.log(_echarts2.default.getInstanceByDom(sss));
    }, _this.coverFirstLineInstance = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { onClick: this.aaa },
          '222'
        ),
        _react2.default.createElement(
          _igroot.Row,
          null,
          _react2.default.createElement(_igroot.Col, null)
        ),
        _react2.default.createElement(_mixCharts2.default, {
          id: 'aaasss',
          legendselectchanged: this.getMixChart.bind(this, "SSS"),
          notMerge: false,
          style: {
            width: '800px',
            height: '500px'
          },
          settings: {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [{
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
              data: [{ value: 335, name: '直达', selected: true }, { value: 679, name: '营销广告' }, { value: 1548, name: '搜索引擎' }]
            }, {
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
              data: [{ value: 335, name: '直达' }, { value: 310, name: '邮件营销' }, { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' }, { value: 1048, name: '百度' }, { value: 251, name: '谷歌' }, { value: 147, name: '必应' }, { value: 102, name: '其他' }]
            }]
          }
        })
      );
    }
  }]);

  return Example;
}(_react2.default.Component);

exports.default = Example;