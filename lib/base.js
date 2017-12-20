'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actions = (_actions = {
  'click': true,
  'legendselectchanged': true,
  'legendselected': true,
  'legendunselected': true,
  'datarangeselected': true,
  'timelinechanged': true
}, _defineProperty(_actions, 'timelinechanged', true), _defineProperty(_actions, 'restore', true), _defineProperty(_actions, 'geoselectchanged', true), _defineProperty(_actions, 'geoselected', true), _defineProperty(_actions, 'geounselected', true), _defineProperty(_actions, 'pieselectchanged', true), _defineProperty(_actions, 'pieselected', true), _defineProperty(_actions, 'mapselectchanged', true), _defineProperty(_actions, 'mapselected', true), _defineProperty(_actions, 'mapunselected', true), _defineProperty(_actions, 'axisareaselected', true), _defineProperty(_actions, 'focusnodeadjacency', true), _defineProperty(_actions, 'unfocusnodeadjacency', true), _defineProperty(_actions, 'brush', true), _defineProperty(_actions, 'brushselected', true), _actions);

var BaseModule = function (_Component) {
  _inherits(BaseModule, _Component);

  function BaseModule() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseModule);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseModule.__proto__ || Object.getPrototypeOf(BaseModule)).call.apply(_ref, [this].concat(args))), _this), _this.Echart = null, _this.state = {
      id: 0
    }, _this.changeEchartDom = function (option) {
      var notMerge = _this.props.notMerge;

      var newOption = _this.processOption(option);

      _this.Echart.setOption(newOption, {
        notMerge: notMerge
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseModule, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        id: this.props.id || new Date().getTime()
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        requestData: nextProps.data
      });
    }
  }, {
    key: 'renderEchartDom',
    value: function renderEchartDom() {
      var _this2 = this;

      var id = this.state.id;
      var _props = this.props,
          settings = _props.settings,
          showLoading = _props.showLoading,
          loadingOption = _props.loadingOption;

      var rootId = document.getElementById(id);
      this.Echart = _echarts2.default.getInstanceByDom(rootId) || _echarts2.default.init(rootId);

      if (showLoading) {
        this.Echart.showLoading(loadingOption || null);
      } else {
        this.Echart.hideLoading();
      }

      if (settings) {
        this.changeEchartDom(settings);
      } else {
        this.Echart.setOption(this.processOption(this.baseOption));
      }

      var _loop = function _loop(x) {
        if (actions[x]) {
          _this2.Echart.on('' + x, function (param) {
            _this2.props[x](param, _this2.Echart);
          });
        }
      };

      for (var x in this.props) {
        _loop(x);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderEchartDom();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderEchartDom();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var chartsElement = document.getElementById('' + this.state.id);
      this.Echart.dispose(chartsElement);
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.state.id;

      var style = this.props.style || {
        width: '100%',
        height: '500px'
      };

      return _react2.default.createElement('div', {
        id: id,
        style: style
      });
    }
  }, {
    key: 'title',
    get: function get() {
      var _props2 = this.props,
          settings = _props2.settings,
          title = _props2.title;

      if (settings && settings.title) {
        settings.title.text = title || '';
        return settings.title;
      } else {
        return {
          text: title || ''
        };
      }
    }
  }, {
    key: 'xAxis',
    get: function get() {
      var _props3 = this.props,
          xAxis = _props3.xAxis,
          settings = _props3.settings;

      if (settings && settings.xAxis) {
        try {
          if (settings.xAxis instanceof Array) {
            settings.xAxis = settings.xAxis[0];
          }
          settings.xAxis.data = xAxis;
          return settings.xAxis;
        } catch (error) {}
      } else {
        return !xAxis ? {} : {
          type: 'category',
          data: xAxis
        };
      }
    }
  }, {
    key: 'yAxis',
    get: function get() {
      return [{ type: 'value' }];
    }
  }, {
    key: 'legend',
    get: function get() {
      var _props4 = this.props,
          data = _props4.data,
          legend = _props4.legend,
          settings = _props4.settings;

      if (settings && settings.legend) {
        try {
          settings.legend.data = data.map(function (item) {
            return item.name;
          });
          return settings.legend;
        } catch (error) {
          console.log(error);
          console.log("配置项有误");
        }
      } else {
        if (!legend) return false;
        return {
          data: data && data.length > 0 ? data.map(function (item) {
            return item.name;
          }) : false
        };
      }
    }
  }]);

  return BaseModule;
}(_react.Component);

exports.default = BaseModule;