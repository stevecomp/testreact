"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  var Fruits = [{
    name: 'Apple'
  }, {
    name: 'Apricot'
  }, {
    name: 'Honeyberry'
  }, {
    name: 'Papaya'
  }, {
    name: 'Jambul'
  }, {
    name: 'Plum'
  }, {
    name: 'Lemon'
  }, {
    name: 'Pomelo'
  }];
  return /*#__PURE__*/_react["default"].createElement("div", null, Fruits.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: "{item.name}"
    }, item.name);
  }));
}
var _default = exports["default"] = App;