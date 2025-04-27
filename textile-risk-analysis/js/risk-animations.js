// 從 risk-animations.tsx 轉換
const { useState, useEffect } = React;
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } = Recharts;

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var RiskAnimations = function RiskAnimations() {
  // 火災三要素動態展示的狀態
  var _useState = (0, _react.useState)(30),
    _useState2 = _slicedToArray(_useState, 2),
    oxygenLevel = _useState2[0],
    setOxygenLevel = _useState2[1];
  var _useState3 = (0, _react.useState)(30),
    _useState4 = _slicedToArray(_useState3, 2),
    fuelLevel = _useState4[0],
    setFuelLevel = _useState4[1];
  var _useState5 = (0, _react.useState)(30),
    _useState6 = _slicedToArray(_useState5, 2),
    heatLevel = _useState6[0],
    setHeatLevel = _useState6[1];
  var _useState7 = (0, _react.useState)("none"),
    _useState8 = _slicedToArray(_useState7, 2),
    fireState = _useState8[0],
    setFireState = _useState8[1]; // none, starting, burning, explosion

  // 粉塵爆炸風險動態展示的狀態
  var _useState9 = (0, _react.useState)(15),
    _useState10 = _slicedToArray(_useState9, 2),
    dustConcentration = _useState10[0],
    setDustConcentration = _useState10[1];
  var _useState11 = (0, _react.useState)("low"),
    _useState12 = _slicedToArray(_useState11, 2),
    dustExplosionRisk = _useState12[0],
    setDustExplosionRisk = _useState12[1];

  // 化學原料風險動態展示
  var _useState13 = (0, _react.useState)("PTA"),
    _useState14 = _slicedToArray(_useState13, 2),
    chemical = _useState14[0],
    setChemical = _useState14[1];

  // 自動更新火災三要素的動畫
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      setOxygenLevel(function (prev) {
        var newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
      setFuelLevel(function (prev) {
        var newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
      setHeatLevel(function (prev) {
        var newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
    }, 2000);
    return function () {
      return clearInterval(interval);
    };
  }, []);

  // 檢查火災狀態
  (0, _react.useEffect)(function () {
    if (oxygenLevel > 60 && fuelLevel > 60 && heatLevel > 60) {
      setFireState("explosion");
    } else if (oxygenLevel > 40 && fuelLevel > 40 && heatLevel > 40) {
      setFireState("burning");
    } else if (oxygenLevel > 30 && fuelLevel > 30 && heatLevel > 30) {
      setFireState("starting");
    } else {
      setFireState("none");
    }
  }, [oxygenLevel, fuelLevel, heatLevel]);

  // 粉塵濃度動畫
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      setDustConcentration(function (prev) {
        var newValue = prev + Math.random() * 6 - 3;
        return Math.max(5, Math.min(50, newValue));
      });
    }, 1500);
    return function () {
      return clearInterval(interval);
    };
  }, []);

  // 檢查粉塵爆炸風險
  (0, _react.useEffect)(function () {
    if (dustConcentration > 35) {
      setDustExplosionRisk("extreme");
    } else if (dustConcentration > 25) {
      setDustExplosionRisk("high");
    } else if (dustConcentration > 15) {
      setDustExplosionRisk("medium");
    } else {
      setDustExplosionRisk("low");
    }
  }, [dustConcentration]);
  var getFireStyleClass = function getFireStyleClass() {
    switch (fireState) {
      case "explosion":
        return "bg-red-600 animate-pulse";
      case "burning":
        return "bg-orange-500";
      case "starting":
        return "bg-yellow-400";
      default:
        return "bg-blue-200";
    }
  };
  var getDustStyleClass = function getDustStyleClass() {
    switch (dustExplosionRisk) {
      case "extreme":
        return "bg-red-600 animate-pulse";
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      default:
        return "bg-green-400";
    }
  };

  // 化學原料切換
  (0, _react.useEffect)(function () {
    var chemicals = ["PTA", "EG", "CPL", "HMDA", "Adipic Acid", "AN", "Propylene"];
    var interval = setInterval(function () {
      setChemical(chemicals[Math.floor(Math.random() * chemicals.length)]);
    }, 3000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full p-4 bg-white rounded-lg space-y-8"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold text-center"
  }, "\u7D21\u7E54\u696D\u98A8\u96AA\u52D5\u614B\u8996\u89BA\u5316"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded-lg p-4 shadow-md"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold mb-3"
  }, "\u706B\u707D\u4E09\u8981\u7D20\u52D5\u614B\u6A21\u64EC"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-3 gap-4 mb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-blue-600 font-semibold"
  }, "\u6C27\u6C23 (\u7A7A\u6C23)"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-4 w-full bg-gray-200 rounded-full overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-full bg-blue-500 transition-all duration-500 ease-in-out",
    style: {
      width: "".concat(oxygenLevel, "%")
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-1"
  }, oxygenLevel.toFixed(1), "%")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-yellow-600 font-semibold"
  }, "\u71C3\u6599 (\u7D21\u7E54\u539F\u6599)"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-4 w-full bg-gray-200 rounded-full overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-full bg-yellow-500 transition-all duration-500 ease-in-out",
    style: {
      width: "".concat(fuelLevel, "%")
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-1"
  }, fuelLevel.toFixed(1), "%")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-red-600 font-semibold"
  }, "\u71B1\u6E90 (\u9EDE\u706B\u6E90)"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-4 w-full bg-gray-200 rounded-full overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-full bg-red-500 transition-all duration-500 ease-in-out",
    style: {
      width: "".concat(heatLevel, "%")
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-1"
  }, heatLevel.toFixed(1), "%"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ".concat(getFireStyleClass())
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-bold text-center"
  }, fireState === "explosion" ? "爆炸風險!" : fireState === "burning" ? "火災!" : fireState === "starting" ? "起火中" : "安全狀態"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 text-sm text-gray-600"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
  }, "\u7576\u4E09\u8981\u7D20\u540C\u6642\u9054\u5230\u9AD8\u6FC3\u5EA6\u6642\uFF0C\u706B\u707D\u98A8\u96AA\u6025\u5287\u4E0A\u5347"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded-lg p-4 shadow-md"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold mb-3"
  }, "\u68C9\u7D6E/\u7C89\u5875\u7206\u70B8\u98A8\u96AA\u52D5\u614B\u6A21\u64EC"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-gray-700 font-semibold mb-1"
  }, "\u61F8\u6D6E\u7C89\u5875\u6FC3\u5EA6 (g/m\xB3)"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-6 w-full bg-gray-200 rounded-full overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-full transition-all duration-500 ease-in-out ".concat(getDustStyleClass()),
    style: {
      width: "".concat(dustConcentration * 2, "%")
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between text-sm mt-1"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\u5B89\u5168\u7BC4\u570D"), /*#__PURE__*/_react["default"].createElement("span", null, "\u7206\u70B8\u4E0B\u9650"), /*#__PURE__*/_react["default"].createElement("span", null, "\u6700\u4F73\u7206\u70B8\u6FC3\u5EA6"), /*#__PURE__*/_react["default"].createElement("span", null, "\u7206\u70B8\u4E0A\u9650"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-2xl font-bold"
  }, dustConcentration.toFixed(1)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm"
  }, "g/m\xB3")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center px-4 py-2 rounded-lg font-bold",
    style: {
      backgroundColor: dustExplosionRisk === "extreme" ? "#dc2626" : dustExplosionRisk === "high" ? "#ef4444" : dustExplosionRisk === "medium" ? "#f59e0b" : "#22c55e",
      color: "white"
    }
  }, dustExplosionRisk === "extreme" ? "極度危險!" : dustExplosionRisk === "high" ? "高風險" : dustExplosionRisk === "medium" ? "中度風險" : "低風險"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm"
  }, "\u7206\u70B8\u6307\u6578"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-xl font-bold"
  }, "Kst ", dustExplosionRisk === "extreme" ? ">300" : dustExplosionRisk === "high" ? "200-300" : dustExplosionRisk === "medium" ? "50-200" : "<50"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 text-sm text-gray-600"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
  }, "\u7576\u7C89\u5875\u6FC3\u5EA6\u9054\u5230\u7206\u70B8\u7BC4\u570D\u4E14\u9047\u5230\u9EDE\u706B\u6E90\u6642\uFF0C\u5C07\u5F15\u767C\u7206\u70B8"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded-lg p-4 shadow-md"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold mb-3"
  }, "\u5316\u5B78\u539F\u6599\u98A8\u96AA\u5FEB\u901F\u63D0\u793A"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-2xl font-bold text-blue-700"
  }, chemical), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-3 gap-1 mb-2"
  }, chemical === "PTA" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u7C89\u5875\u7206\u70B8"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-blue-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u975C\u96FB\u5371\u5BB3"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u9AD8\u6EAB\u5206\u89E3")), chemical === "EG" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u53EF\u71C3\u6DB2\u9AD4"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-purple-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u84B8\u6C23\u7206\u70B8"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-orange-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u5065\u5EB7\u5371\u5BB3")), chemical === "CPL" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u53EF\u71C3\u56FA\u9AD4"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u84B8\u6C23\u7206\u70B8"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-green-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u6BD2\u6027\u5371\u5BB3")), chemical === "HMDA" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-red-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u6613\u71C3\u6DB2\u9AD4"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-purple-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u84B8\u6C23\u7206\u70B8"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-orange-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u8150\u8755\u6027")), chemical === "Adipic Acid" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u7C89\u5875\u7206\u70B8"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-gray-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u4F4E\u53EF\u71C3\u6027"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-green-500 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u523A\u6FC0\u6027")), chemical === "AN" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-red-600 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u6975\u5EA6\u6613\u71C3"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-purple-600 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u7206\u70B8\u5371\u96AA"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-orange-600 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u9AD8\u6BD2\u6027")), chemical === "Propylene" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-red-600 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u6975\u5EA6\u6613\u71C3"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-blue-600 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u58D3\u7E2E\u6C23\u9AD4"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-yellow-600 text-white text-center px-2 py-1 rounded text-sm"
  }, "\u56DE\u706B\u98A8\u96AA"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-center"
  }, chemical === "PTA" && "對苯二甲酸 - 聚酯纖維主要原料", chemical === "EG" && "乙二醇 - 聚酯纖維主要原料", chemical === "CPL" && "己內醯胺 - 尼龍6主要原料", chemical === "HMDA" && "己二胺 - 尼龍6,6主要原料", chemical === "Adipic Acid" && "己二酸 - 尼龍6,6主要原料", chemical === "AN" && "丙烯腈 - 壓克力纖維原料", chemical === "Propylene" && "丙烯 - 聚丙烯纖維原料")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-16 h-16 rounded-full flex items-center justify-center border-4",
    style: {
      borderColor: chemical === "AN" || chemical === "Propylene" ? "#dc2626" : chemical === "HMDA" || chemical === "CPL" ? "#ef4444" : chemical === "EG" ? "#f59e0b" : "#22c55e"
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xl font-bold",
    style: {
      color: chemical === "AN" || chemical === "Propylene" ? "#dc2626" : chemical === "HMDA" || chemical === "CPL" ? "#ef4444" : chemical === "EG" ? "#f59e0b" : "#22c55e"
    }
  }, chemical === "AN" || chemical === "Propylene" ? "4" : chemical === "HMDA" || chemical === "CPL" ? "3" : chemical === "EG" ? "2" : "1"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 text-sm text-gray-600"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
  }, "\u5316\u5B78\u539F\u6599\u98A8\u96AA\u7B49\u7D1A\u5F9E1(\u4F4E)\u52304(\u6975\u9AD8)\uFF0C\u61C9\u56B4\u683C\u6309\u7167\u5B89\u5168\u898F\u7BC4\u8655\u7406"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "*\u6A21\u64EC\u5C55\u793A\u50C5\u4F9B\u6559\u80B2\u76EE\u7684\uFF0C\u5BE6\u969B\u98A8\u96AA\u61C9\u7531\u5C08\u696D\u640D\u9632\u5DE5\u7A0B\u5E2B\u8A55\u4F30")));
};
var _default = exports["default"] = RiskAnimations;


// 掛載到全局
window.RiskAnimations = RiskAnimations;
