"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Shape = _interopRequireDefault(require("./_Shape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var renderTemplate = function renderTemplate(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$allowStroke = _ref.allowStroke,
      allowStroke = _ref$allowStroke === void 0 ? true : _ref$allowStroke;

  return allowStroke ? _react.default.createElement("rect", _extends({
    key: 0,
    width: "1.8",
    height: "1.8",
    rx: "0.4",
    ry: "0.4",
    x: "-0.9",
    y: "-0.9",
    strokeDasharray: "0.1, 0.05"
  }, attrs)) : _react.default.createElement("rect", _extends({
    width: "1.8",
    height: "1.8",
    rx: "0.4",
    ry: "0.4",
    x: "-0.9",
    y: "-0.9"
  }, attrs));
};

var ShapeDottedSquare =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShapeDottedSquare, _React$Component);

  function ShapeDottedSquare() {
    _classCallCheck(this, ShapeDottedSquare);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShapeDottedSquare).apply(this, arguments));
  }

  _createClass(ShapeDottedSquare, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Shape.default, _extends({
        renderTemplate: renderTemplate
      }, this.props));
    }
  }]);

  return ShapeDottedSquare;
}(_react.default.Component);

exports.default = ShapeDottedSquare;