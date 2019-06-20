"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _wcReactApp = _interopRequireDefault(require("./wc-react-app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_wcReactApp.default, null), document.getElementById('root'));