'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('../../base');

var _base2 = _interopRequireDefault(_base);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MixChart = function (_BaseModule) {
  _inherits(MixChart, _BaseModule);

  function MixChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MixChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MixChart.__proto__ || Object.getPrototypeOf(MixChart)).call.apply(_ref, [this].concat(args))), _this), _this.baseOption = {
      title: {
        text: '$堆叠区域图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['$邮件营销', '$联盟广告', '$视频广告', '$直接访问', '$搜索引擎']
      },
      grid: {},
      series: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MixChart, [{
    key: 'processOption',
    value: function processOption(option) {
      return option;
    }
  }]);

  return MixChart;
}(_base2.default);

exports.default = MixChart;