'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function promiseExpressMiddleware(compiler, opts) {
  var expressMiddleware = (0, _webpackDevMiddleware2.default)(compiler, opts);

  return function (ctx) {
    return new Promise(function (resolve, reject) {
      expressMiddleware(ctx.req, {
        end: function end(content) {
          ctx.body = content;
        },
        setHeader: ctx.set.bind(ctx)
      }, resolve);
    });
  };
}

exports.default = function (compiler, opts) {
  var middleware = promiseExpressMiddleware(compiler, opts);

  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return middleware(ctx);

            case 2:
              next();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/*
* await middleware(ctx.req, {
 end: (content) => {
 ctx.body = content
 },
 setHeader: ctx.set.bind(ctx)
 }, next)
* */