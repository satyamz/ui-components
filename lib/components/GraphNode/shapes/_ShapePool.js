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

var UNIT_POOL = 'M-0.7973230450553865,-0.9595695704742895 h1.6001461457538446 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,0.16007718258067458 v1.6007718258067438 a0.1600146145753847 0.16007718258067458 0 0 1 -0.1600146145753847,0.16007718258067458 h-1.6001461457538446 a0.1600146145753847 0.16007718258067458 0 0 1 -0.1600146145753847,-0.16007718258067458 v-1.6007718258067438 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 zv-0.08003859129033725 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 h1.6001461457538446 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,0.16007718258067458 v1.7608490083874186 a0.08000730728769236 0.08003859129033725 0 0 1 -0.08000730728769236,0.08003859129033725 h-0.08000730728769236 a0.1600146145753847 0.16007718258067458 0 0 1 -0.1600146145753847,0.16007718258067458 h-1.6001461457538446 a0.1600146145753847 0.16007718258067458 0 0 1 -0.1600146145753847,-0.16007718258067458 v-1.6007718258067438 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 zv-0.08003859129033725 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 v-0.04001929564516875 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 h1.6001461457538446 a0.1600146145753847 0.16007718258067458 0 0 1 0.1600146145753847,0.16007718258067458 v1.7608490083874186 a0.08000730728769236 0.08003859129033725 0 0 1 -0.08000730728769236,0.08003859129033725 h-0.08000730728769236';

var renderTemplate = function renderTemplate(attrs) {
  return _react.default.createElement("path", _extends({
    d: UNIT_POOL
  }, attrs));
};

var ShapePool =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShapePool, _React$Component);

  function ShapePool() {
    _classCallCheck(this, ShapePool);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShapePool).apply(this, arguments));
  }

  _createClass(ShapePool, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Shape.default, _extends({
        renderTemplate: renderTemplate
      }, this.props));
    }
  }]);

  return ShapePool;
}(_react.default.Component);

exports.default = ShapePool;