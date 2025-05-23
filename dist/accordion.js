"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _fa = require("react-icons/fa6");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AccordionContext = /*#__PURE__*/(0, _react.createContext)();
var Accordion = function Accordion(_ref) {
  var className = _ref.className,
    children = _ref.children,
    defaultIndex = _ref.defaultIndex;
  var _useState = (0, _react.useState)(defaultIndex | null),
    _useState2 = _slicedToArray(_useState, 2),
    openIndex = _useState2[0],
    setOpenIndex = _useState2[1];
  var toggleItem = function toggleItem(index) {
    setOpenIndex(function (prev) {
      return prev === index ? null : index;
    });
  };
  return /*#__PURE__*/React.createElement(AccordionContext.Provider, {
    value: {
      openIndex: openIndex,
      toggleItem: toggleItem
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(className)
  }, children));
};
Accordion.Item = function Item(_ref2) {
  var children = _ref2.children,
    title = _ref2.title,
    index = _ref2.index,
    className = _ref2.className;
  var _useContext = (0, _react.useContext)(AccordionContext),
    openIndex = _useContext.openIndex,
    toggleItem = _useContext.toggleItem;
  var selected = openIndex === index;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col "
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return toggleItem(index);
    },
    className: "bg-primary px-2 py-2 w-full flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-light"
  }, title), /*#__PURE__*/React.createElement(_fa.FaChevronDown, {
    className: "text-light ".concat(selected && "rotate-180", " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden ".concat(selected ? "max-h-96" : "max-h-0"),
    style: {
      transition: 'all .5s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: " ".concat(className, " w-full h-fit px-2 py-2")
  }, children)));
};
var _default = exports["default"] = Accordion;