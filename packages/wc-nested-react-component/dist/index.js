"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _wcNestedReactComponent = _interopRequireDefault(require("./wc-nested-react-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_wcNestedReactComponent.default, null), document.getElementById('root'));