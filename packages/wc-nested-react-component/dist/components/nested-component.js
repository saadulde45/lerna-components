"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./nested-component.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedComponent = function NestedComponent(props) {
  return _react.default.createElement("div", {
    className: "inner-component-class"
  }, "Nested react component");
};

var _default = NestedComponent;
exports.default = _default;