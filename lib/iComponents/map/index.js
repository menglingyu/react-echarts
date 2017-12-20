'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('../../base');

var _base2 = _interopRequireDefault(_base);

require('echarts/lib/chart/map');

var _mapConfig = require('../../../mock/mapConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { barOption } from '../../../mock/barConfig'
// import { pieOption } from '../../../mock/pieConfig'

var mapBaseOption = {
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
};

var mapRule = {
  title: true,
  legend: true,
  grid: true,
  xAxis: true,
  data: true,
  settings: true
};

var map = function (_BaseModule) {
  _inherits(map, _BaseModule);

  function map() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = map.__proto__ || Object.getPrototypeOf(map)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mapBaseOption: mapBaseOption
    }, _this.config = function () {
      var option = _mapConfig.mapOption;
      console.log(_mapConfig.mapOption);
      _this.changeEchartDom(option);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(map, [{
    key: 'title',
    get: function get() {
      var title = this.props.title;

      return typeof title === 'string' ? { text: title } : title;
    }
  }, {
    key: 'legend',
    get: function get() {
      var _props = this.props,
          data = _props.data,
          legend = _props.legend,
          settings = _props.settings;

      if (settings) {
        if (!!settings.legend && legend === true && data instanceof Array && data.length > 0) {
          settings.legend.data = data.map(function (item) {
            return item.name;
          });
          return settings.legend;
        }
      } else {
        return {
          data: data && data.length > 0 ? data.map(function (item) {
            return item.name;
          }) : false
        };
      }
    }
  }, {
    key: 'grid',
    get: function get() {
      var grid = this.props.grid;

      if (!grid) {
        return false;
      }
      return {
        top: grid[0],
        right: grid[1],
        bottom: grid[2],
        left: grid[3]
      };
    }
  }, {
    key: 'data',
    get: function get() {
      var data = this.props.data;

      return !data ? [] : 'map';
    }
  }]);

  return map;
}(_base2.default);

exports.default = map;