'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotMiddleware = exports.devMiddleware = undefined;

var _devMiddleware = require('./devMiddleware');

var _devMiddleware2 = _interopRequireDefault(_devMiddleware);

var _hotMiddleware = require('./hotMiddleware');

var _hotMiddleware2 = _interopRequireDefault(_hotMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.devMiddleware = _devMiddleware2.default;
exports.hotMiddleware = _hotMiddleware2.default;