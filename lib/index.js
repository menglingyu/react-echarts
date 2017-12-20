'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MixChart = exports.Scatter = exports.Pie = exports.Bar = exports.Line = undefined;

var _line = require('./iComponents/line');

var _line2 = _interopRequireDefault(_line);

var _bar = require('./iComponents/bar');

var _bar2 = _interopRequireDefault(_bar);

var _pie = require('./iComponents/pie');

var _pie2 = _interopRequireDefault(_pie);

var _scatter = require('./iComponents/scatter');

var _scatter2 = _interopRequireDefault(_scatter);

var _mixCharts = require('./iComponents/mixCharts');

var _mixCharts2 = _interopRequireDefault(_mixCharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Map from './iComponents/map'
exports.Line = _line2.default;
exports.Bar = _bar2.default;
exports.Pie = _pie2.default;
exports.Scatter = _scatter2.default;
exports.MixChart = _mixCharts2.default;