"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _nestedComponent = _interopRequireDefault(require("./components/nested-component"));

require("./wc-nested-react-component.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WCNestedReactComponent() {
  return _react.default.createElement("div", null, "Hello", _react.default.createElement(_nestedComponent.default, null));
}

var _default = WCNestedReactComponent;
exports.default = _default;