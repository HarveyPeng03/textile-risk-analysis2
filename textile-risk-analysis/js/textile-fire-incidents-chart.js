// 從 textile-fire-incidents-chart.tsx 轉換
const { useState, useEffect } = React;
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } = Recharts;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FireIncidentsChart = function FireIncidentsChart() {
  // 不同類型紡織廠的火災事故統計數據（模擬數據）
  var factoryTypeData = [{
    name: '棉紡織廠',
    incidents: 45,
    deaths: 12,
    injuries: 76,
    losses: 850
  }, {
    name: '人造纖維廠',
    incidents: 37,
    deaths: 8,
    injuries: 53,
    losses: 720
  }, {
    name: '織布廠',
    incidents: 28,
    deaths: 4,
    injuries: 31,
    losses: 410
  }, {
    name: '染整廠',
    incidents: 42,
    deaths: 9,
    injuries: 64,
    losses: 780
  }, {
    name: '機能布料廠',
    incidents: 23,
    deaths: 6,
    injuries: 29,
    losses: 520
  }];

  // 火災起因分布（模擬數據）
  var causesData = [{
    name: '電氣短路',
    value: 32,
    color: '#0088FE'
  }, {
    name: '靜電引燃',
    value: 24,
    color: '#00C49F'
  }, {
    name: '機械過熱',
    value: 18,
    color: '#FFBB28'
  }, {
    name: '熱媒油洩漏',
    value: 13,
    color: '#FF8042'
  }, {
    name: '粉塵爆炸',
    value: 8,
    color: '#8884d8'
  }, {
    name: '其他',
    value: 5,
    color: '#82ca9d'
  }];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full space-y-8 p-4 bg-white rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold text-center mb-2"
  }, "2020-2025\u5E74\u53F0\u7063\u7D21\u7E54\u696D\u706B\u707D\u4E8B\u6545\u7D71\u8A08"), /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-md text-center text-gray-600 mb-4"
  }, "\u5404\u985E\u578B\u5DE5\u5EE0\u4E8B\u6545\u983B\u7387\u8207\u640D\u5931\u91D1\u984D\u6BD4\u8F03"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-64 w-full"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.BarChart, {
    data: factoryTypeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    yAxisId: "left",
    orientation: "left",
    stroke: "#8884d8"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    yAxisId: "right",
    orientation: "right",
    stroke: "#82ca9d"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, null), /*#__PURE__*/_react["default"].createElement(_recharts.Bar, {
    yAxisId: "left",
    dataKey: "incidents",
    name: "\u4E8B\u6545\u6578\u91CF",
    fill: "#8884d8"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Bar, {
    yAxisId: "right",
    dataKey: "losses",
    name: "\u640D\u5931\u91D1\u984D(\u842C\u5143)",
    fill: "#82ca9d"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold text-center mb-2"
  }, "\u50B7\u4EA1\u4EBA\u6578\u7D71\u8A08"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-64"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.BarChart, {
    data: factoryTypeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, null), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, null), /*#__PURE__*/_react["default"].createElement(_recharts.Bar, {
    dataKey: "deaths",
    name: "\u6B7B\u4EA1\u4EBA\u6578",
    fill: "#ff0000"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Bar, {
    dataKey: "injuries",
    name: "\u53D7\u50B7\u4EBA\u6578",
    fill: "#ffaa00"
  }))))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold text-center mb-2"
  }, "\u706B\u707D\u8D77\u56E0\u5206\u5E03"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-64"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.PieChart, null, /*#__PURE__*/_react["default"].createElement(_recharts.Pie, {
    data: causesData,
    cx: "50%",
    cy: "50%",
    labelLine: true,
    outerRadius: 80,
    fill: "#8884d8",
    dataKey: "value",
    label: function label(_ref) {
      var name = _ref.name,
        percent = _ref.percent;
      return "".concat(name, ": ").concat((percent * 100).toFixed(0), "%");
    }
  }, causesData.map(function (entry, index) {
    return /*#__PURE__*/_react["default"].createElement(_recharts.Cell, {
      key: "cell-".concat(index),
      fill: entry.color
    });
  })), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null)))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "*\u6578\u64DA\u4F86\u6E90\uFF1A2020-2025\u5E74\u53F0\u7063\u5DE5\u5EE0\u706B\u707D\u7D71\u8A08\u8CC7\u6599\u5EAB\u53CA\u4FDD\u96AA\u7406\u8CE0\u6848\u4F8B\u5F59\u6574"), /*#__PURE__*/_react["default"].createElement("p", null, "*\u640D\u5931\u91D1\u984D\u55AE\u4F4D\uFF1A\u65B0\u53F0\u5E63\u842C\u5143")));
};
var _default = exports["default"] = FireIncidentsChart;


// 掛載到全局
window.TextileFireIncidentsChart = TextileFireIncidentsChart;
