// 從 comparative-risk-matrix.tsx 轉換
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
var RiskMatrix = function RiskMatrix() {
  var _useState = (0, _react.useState)('matrix'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];

  // 風險矩陣數據
  var riskMatrix = [{
    id: 1,
    process: '棉花開鬆/清理',
    likelihood: 5,
    severity: 4,
    risk: 20,
    category: '極高風險',
    color: 'bg-red-600'
  }, {
    id: 2,
    process: '熱媒油系統',
    likelihood: 4,
    severity: 5,
    risk: 20,
    category: '極高風險',
    color: 'bg-red-600'
  }, {
    id: 3,
    process: '染料混合區',
    likelihood: 4,
    severity: 4,
    risk: 16,
    category: '高風險',
    color: 'bg-orange-500'
  }, {
    id: 4,
    process: '化學纖維聚合',
    likelihood: 3,
    severity: 5,
    risk: 15,
    category: '高風險',
    color: 'bg-orange-500'
  }, {
    id: 5,
    process: '織布機/織造',
    likelihood: 4,
    severity: 3,
    risk: 12,
    category: '中高風險',
    color: 'bg-yellow-500'
  }, {
    id: 6,
    process: '定型機/烘箱',
    likelihood: 3,
    severity: 4,
    risk: 12,
    category: '中高風險',
    color: 'bg-yellow-500'
  }, {
    id: 7,
    process: '紡紗設備',
    likelihood: 3,
    severity: 3,
    risk: 9,
    category: '中等風險',
    color: 'bg-blue-500'
  }, {
    id: 8,
    process: '塗佈加工',
    likelihood: 3,
    severity: 3,
    risk: 9,
    category: '中等風險',
    color: 'bg-blue-500'
  }, {
    id: 9,
    process: '成品儲存',
    likelihood: 2,
    severity: 4,
    risk: 8,
    category: '中等風險',
    color: 'bg-blue-500'
  }, {
    id: 10,
    process: '機械加工區',
    likelihood: 2,
    severity: 3,
    risk: 6,
    category: '低風險',
    color: 'bg-green-500'
  }];

  // 法規對照表數據
  var regulations = [{
    riskArea: '棉花開鬆/清理',
    taiwanRegs: {
      code: '《職安衛生設施規則》§ 188',
      requirement: '要求通風、除塵、靜電',
      rating: '基本',
      gaps: '未強制DHA；無爆炸釋放/抑爆指引'
    },
    nfpaRegs: {
      code: 'NFPA 652/654',
      requirement: '5年一次DHA、K<sub>st</sub>分級',
      rating: '全面',
      advantage: '系統性防護、二次爆炸預防'
    },
    fmRegs: {
      code: 'FMDS 7-76',
      requirement: '絨絮層厚25mm判定，高速火花抑制+抑爆',
      rating: '嚴格',
      advantage: '自動化防護、明確量化標準'
    }
  }, {
    riskArea: '熱媒油系統',
    taiwanRegs: {
      code: '《鍋爐及壓力容器規則》+一般消防條款',
      requirement: '按鍋爐標準檢驗',
      rating: '不足',
      gaps: '缺少專章；無雙閥/漏油盤/聯鎖'
    },
    nfpaRegs: {
      code: 'NFPA 87',
      requirement: '雙閥、漏油盤、氧化超溫偵測、燃燒器聯鎖',
      rating: '全面',
      advantage: '全面系統安全要求'
    },
    fmRegs: {
      code: 'FMDS 7-99',
      requirement: '試壓1.5×MAWP、保溫外表≤60°C',
      rating: '嚴格',
      advantage: '強化機械完整性，明確量化標準'
    }
  }, {
    riskArea: '化學溶劑處理',
    taiwanRegs: {
      code: '《公共危險物品及可燃性高壓氣體設置標準》§33-35',
      requirement: '排氣點≥屋簷4m、溫控靜電消除',
      rating: '基本',
      gaps: '無LFL聯鎖；換氣僅定性描述'
    },
    nfpaRegs: {
      code: 'NFPA 30/34',
      requirement: '閃點分級、分區距離、烘箱換氣≥8ACH',
      rating: '全面',
      advantage: '量化的換氣標準和區劃要求'
    },
    fmRegs: {
      code: 'FMDS 7-59',
      requirement: 'Stenter換氣≥8ACH, LFL 20%聯鎖停機',
      rating: '嚴格',
      advantage: '更低的LFL警報值(15%)和停機標準(20%)'
    }
  }, {
    riskArea: '紡織品倉儲',
    taiwanRegs: {
      code: '《各類場所消防安全設備設置標準》§50',
      requirement: '一般≥10L/m²·min、高架庫11.4L/m²·min',
      rating: '基本',
      gaps: '密度偏低；高架布捲特殊風險未考慮'
    },
    nfpaRegs: {
      code: 'NFPA 13/230',
      requirement: '紡織絮屑區流量12.2–15.2L/m²·min',
      rating: '全面',
      advantage: '依高度與貨架類型差異化設計'
    },
    fmRegs: {
      code: 'FMDS 3-26',
      requirement: '>7.6m儲區建議ESFR K-25',
      rating: '嚴格',
      advantage: '早期抑制設計，解決布捲內芯陰燃問題'
    }
  }, {
    riskArea: '電氣設備',
    taiwanRegs: {
      code: '《電氣設備裝置規則》',
      requirement: '採IEC Zone，區劃由業者自定',
      rating: '基本',
      gaps: '未針對絮屑+低閃點溶劑複合區給指引'
    },
    nfpaRegs: {
      code: 'NEC/NFPA 70 Article 500',
      requirement: '系統化分級',
      rating: '全面',
      advantage: '明確的危險區域分類標準'
    },
    fmRegs: {
      code: 'FMDS 1-7附錄',
      requirement: '織機、開鬆機典型Zone指引',
      rating: '嚴格',
      advantage: '紡織業專用防爆區域範本，實用性高'
    }
  }];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full p-4 bg-white rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold text-center mb-4"
  }, "\u7D21\u7E54\u696D\u98A8\u96AA\u77E9\u9663\u8207\u6CD5\u898F\u5C0D\u7167\u5206\u6790"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex border-b mb-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "px-4 py-2 font-semibold ".concat(activeTab === 'matrix' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'),
    onClick: function onClick() {
      return setActiveTab('matrix');
    }
  }, "\u98A8\u96AA\u77E9\u9663"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "px-4 py-2 font-semibold ".concat(activeTab === 'regulations' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'),
    onClick: function onClick() {
      return setActiveTab('regulations');
    }
  }, "\u6CD5\u898F\u5C0D\u7167\u8868")), activeTab === 'matrix' && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-semibold mb-2"
  }, "\u7D21\u7E54\u696D\u88FD\u7A0B\u98A8\u96AA\u8A55\u4F30\u77E9\u9663"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "min-w-full bg-white border"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "bg-gray-100"
  }, /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2"
  }, "\u88FD\u7A0B/\u8A2D\u5099"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2"
  }, "\u53EF\u80FD\u6027 (1-5)"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2"
  }, "\u56B4\u91CD\u6027 (1-5)"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2"
  }, "\u98A8\u96AA\u503C (L\xD7S)"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2"
  }, "\u98A8\u96AA\u7B49\u7D1A"))), /*#__PURE__*/_react["default"].createElement("tbody", null, riskMatrix.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: item.id
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-4 py-2"
    }, item.process), /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-4 py-2 text-center"
    }, item.likelihood), /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-4 py-2 text-center"
    }, item.severity), /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-4 py-2 text-center font-bold"
    }, item.risk), /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-4 py-2"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "inline-block px-2 py-1 rounded text-white text-sm ".concat(item.color)
    }, item.category)));
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-semibold mb-2"
  }, "\u98A8\u96AA\u8996\u89BA\u5316\u77E9\u9663"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-6 gap-0 border border-gray-300"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 border bg-gray-100 p-2 flex items-center justify-center font-bold"
  }, "\u53EF\u80FD\u6027 \\ \u56B4\u91CD\u6027"), [1, 2, 3, 4, 5].map(function (severity) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: severity,
      className: "border bg-gray-100 p-2 text-center font-semibold"
    }, severity, " ", severity === 1 ? '(輕微)' : severity === 5 ? '(災難性)' : '');
  }), [5, 4, 3, 2, 1].map(function (likelihood) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: likelihood
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "border p-2 bg-gray-100 font-semibold text-center"
    }, likelihood, " ", likelihood === 1 ? '(罕見)' : likelihood === 5 ? '(幾乎確定)' : ''), [1, 2, 3, 4, 5].map(function (severity) {
      var risk = likelihood * severity;
      var colorClass = 'bg-green-100 border-green-500';
      if (risk >= 15) colorClass = 'bg-red-100 border-red-500';else if (risk >= 10) colorClass = 'bg-orange-100 border-orange-500';else if (risk >= 5) colorClass = 'bg-yellow-100 border-yellow-500';

      // 找出此風險等級的製程
      var processes = riskMatrix.filter(function (item) {
        return item.likelihood === likelihood && item.severity === severity;
      }).map(function (item) {
        return item.process;
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: severity,
        className: "border-2 p-2 text-center ".concat(colorClass)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "font-bold"
      }, risk), processes.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-xs mt-1 max-h-12 overflow-y-auto"
      }, processes.join(', ')));
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-4 gap-2 mt-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 bg-red-100 border-2 border-red-500 text-center text-sm"
  }, "15-25: \u6975\u9AD8\u98A8\u96AA", /*#__PURE__*/_react["default"].createElement("br", null), "\u9700\u7ACB\u5373\u63A1\u53D6\u63A7\u5236\u63AA\u65BD"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 bg-orange-100 border-2 border-orange-500 text-center text-sm"
  }, "10-14: \u9AD8\u98A8\u96AA", /*#__PURE__*/_react["default"].createElement("br", null), "\u9700\u512A\u5148\u898F\u5283\u63A7\u5236\u63AA\u65BD"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 bg-yellow-100 border-2 border-yellow-500 text-center text-sm"
  }, "5-9: \u4E2D\u7B49\u98A8\u96AA", /*#__PURE__*/_react["default"].createElement("br", null), "\u9700\u5B9A\u671F\u76E3\u63A7\u4E26\u6539\u9032"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 bg-green-100 border-2 border-green-500 text-center text-sm"
  }, "1-4: \u4F4E\u98A8\u96AA", /*#__PURE__*/_react["default"].createElement("br", null), "\u53EF\u63A5\u53D7\u4F46\u9700\u95DC\u6CE8"))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-semibold mb-2"
  }, "\u7D21\u7E54\u696D\u5404\u985E\u5DE5\u5EE0\u4E3B\u8981\u98A8\u96AA\u9EDE\u5206\u4F48"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded p-3"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-bold text-blue-800 border-b pb-1 mb-2"
  }, "\u68C9\u7D21\u7E54\u5EE0"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-1 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-red-600 mr-2"
  }), "\u958B\u9B06/\u6E05\u68C9\u5340(\u7C89\u5875\u7206\u70B8\u8207\u706B\u707D)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-orange-500 mr-2"
  }), "\u7D21\u7D17\u6A5F\u904B\u884C\u5340(\u6A5F\u68B0\u904E\u71B1\u8207\u98DB\u7D6E)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-yellow-500 mr-2"
  }), "\u68C9\u82B1/\u68C9\u7D17\u5009\u5EAB(\u706B\u8F09\u91CF\u8207\u81EA\u71C3)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-yellow-500 mr-2"
  }), "\u96C6\u5875\u7CFB\u7D71(\u7C89\u5875\u7D2F\u7A4D\u8207\u706B\u82B1)"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded p-3"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-bold text-blue-800 border-b pb-1 mb-2"
  }, "\u4EBA\u9020\u7E96\u7DAD\u5EE0"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-1 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-red-600 mr-2"
  }), "\u71B1\u5A92\u6CB9\u7CFB\u7D71(\u6D29\u6F0F\u8207\u6C23\u7206)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-red-600 mr-2"
  }), "\u5316\u5B78\u539F\u6599\u5132\u5B58(\u6613\u71C3\u6DB2\u9AD4)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-orange-500 mr-2"
  }), "\u805A\u5408\u53CD\u61C9\u5340(\u653E\u71B1\u8207\u5931\u63A7)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-yellow-500 mr-2"
  }), "\u7D21\u7D72\u8A2D\u5099(\u9AD8\u6EAB\u8868\u9762)"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded p-3"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-bold text-blue-800 border-b pb-1 mb-2"
  }, "\u7E54\u5E03\u5EE0"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-1 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-orange-500 mr-2"
  }), "\u7E54\u6A5F\u904B\u884C\u5340(\u6469\u64E6\u8207\u77ED\u8DEF)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-yellow-500 mr-2"
  }), "\u7D93\u7D17\u6E96\u5099\u5340(\u7D17\u67B6\u8207\u975C\u96FB)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-yellow-500 mr-2"
  }), "\u96C6\u5875\u8A2D\u5099(\u7C89\u5875\u7A4D\u805A)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-blue-500 mr-2"
  }), "\u6574\u7D93\u8A2D\u5099(\u6A5F\u68B0\u640D\u50B7)"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded p-3"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-bold text-blue-800 border-b pb-1 mb-2"
  }, "\u67D3\u6574\u5EE0"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-1 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-red-600 mr-2"
  }), "\u5B9A\u578B\u6A5F/\u70D8\u7BB1(\u9AD8\u6EAB\u8207\u6EB6\u5291)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-orange-500 mr-2"
  }), "\u67D3\u6599\u6DF7\u5408\u5340(\u5316\u5B78\u53CD\u61C9)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-orange-500 mr-2"
  }), "\u84B8\u716E\u8A2D\u5099(\u9AD8\u58D3\u84B8\u6C7D)"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block w-3 h-3 bg-yellow-500 mr-2"
  }), "\u5EE2\u6C34\u8655\u7406\u5340(\u6709\u5BB3\u6C23\u9AD4)")))))), activeTab === 'regulations' && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-semibold mb-2"
  }, "\u53F0\u7063\u7D21\u7E54\u696D\u9632\u706B\u5B89\u5168\u6CD5\u898F\u8207\u570B\u969B\u6A19\u6E96\u5C0D\u7167"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "min-w-full bg-white border"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "bg-gray-100"
  }, /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2 w-1/6"
  }, "\u98A8\u96AA\u5340\u57DF"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2 w-5/18"
  }, "\u53F0\u7063\u73FE\u884C\u6CD5\u898F"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2 w-5/18"
  }, "NFPA\u6A19\u6E96"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "border px-4 py-2 w-5/18"
  }, "FM Global\u6A19\u6E96"))), /*#__PURE__*/_react["default"].createElement("tbody", null, regulations.map(function (reg, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index,
      className: index % 2 === 0 ? 'bg-gray-50' : ''
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-4 py-2 font-semibold"
    }, reg.riskArea), /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-3 py-2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u4F9D\u64DA: "), /*#__PURE__*/_react["default"].createElement("span", {
      dangerouslySetInnerHTML: {
        __html: reg.taiwanRegs.code
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u8981\u6C42: "), reg.taiwanRegs.requirement), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u8A55\u7D1A: "), /*#__PURE__*/_react["default"].createElement("span", {
      className: "px-1 py-0.5 rounded text-xs text-white ".concat(reg.taiwanRegs.rating === '基本' ? 'bg-yellow-500' : reg.taiwanRegs.rating === '不足' ? 'bg-red-500' : 'bg-blue-500')
    }, reg.taiwanRegs.rating)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u7F3A\u53E3: "), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-red-600"
    }, reg.taiwanRegs.gaps))), /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-3 py-2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u4F9D\u64DA: "), /*#__PURE__*/_react["default"].createElement("span", {
      dangerouslySetInnerHTML: {
        __html: reg.nfpaRegs.code
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u8981\u6C42: "), /*#__PURE__*/_react["default"].createElement("span", {
      dangerouslySetInnerHTML: {
        __html: reg.nfpaRegs.requirement
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u8A55\u7D1A: "), /*#__PURE__*/_react["default"].createElement("span", {
      className: "px-1 py-0.5 rounded text-xs text-white bg-blue-500"
    }, reg.nfpaRegs.rating)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u512A\u52E2: "), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-green-600"
    }, reg.nfpaRegs.advantage))), /*#__PURE__*/_react["default"].createElement("td", {
      className: "border px-3 py-2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u4F9D\u64DA: "), reg.fmRegs.code), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u8981\u6C42: "), reg.fmRegs.requirement), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u8A55\u7D1A: "), /*#__PURE__*/_react["default"].createElement("span", {
      className: "px-1 py-0.5 rounded text-xs text-white bg-purple-600"
    }, reg.fmRegs.rating)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "font-semibold text-gray-700"
    }, "\u512A\u52E2: "), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-blue-600"
    }, reg.fmRegs.advantage))));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-semibold mb-2"
  }, "\u6CD5\u898F\u843D\u5DEE\u8207\u5EFA\u8B70\u6539\u9032\u65B9\u5411"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded-lg p-4 bg-orange-50"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-bold text-orange-800 mb-2"
  }, "\u4E3B\u8981\u6CD5\u898F\u843D\u5DEE"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-disc pl-5 space-y-2 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u4EE5\u300C\u6750\u6599\u985E\u5225\u300D\u800C\u975E\u300C\u88FD\u7A0B\u5371\u5BB3\u300D\u5206\u985E"), " - \u53F0\u7063\u6CD5\u898F\u591A\u5C07\u7D21\u7E54\u5EE0\u8996\u70BAC-1\u300C\u7279\u6B8A\u5DE5\u5EE0\u985E\u300D\uFF0C\u50C5\u4F9D\u5371\u96AA\u7269(\u91CF)\u7D0D\u7BA1\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u7121\u300C\u7C89\u5875\u5371\u5BB3\u5206\u6790(DHA)\u300D\u5F37\u5236\u689D\u6B3E"), " - NFPA 652\u81EA2020\u5E74\u8D77\u8981\u6C42\u53EF\u71C3\u7C89\u5875\u88FD\u7A0B\u6BCF5\u5E74\u91CD\u505ADHA\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u975C\u96FB & LEL\u91CF\u5316\u9580\u6ABB\u7F3A\u4F4D"), " - \u76EE\u524D\u50C5\u898F\u5B9A\u300C\u6709\u6548\u6D88\u9664\u975C\u96FB\u300D\uFF0C\u4F46\u672A\u898F\u5B9A\u63A5\u5730\u96FB\u963B\u22641M\u03A9\u6216LFL 20%\u806F\u9396\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u81EA\u52D5\u6D88\u9632\u7CFB\u7D71\u300C\u906E\u853D\u56E0\u7D20\u300D\u672A\u7279\u5316"), " - \u672A\u8003\u616E\u68C9\u7D6E\u906E\u853D\u5674\u982D\u7684\u7279\u6B8A\u60C5\u6CC1\uFF0C\u4E0D\u5982NFPA/FM\u8981\u6C42\u7684\u591A\u65B9\u5411\u5674\u982D\u8A2D\u8A08\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u71B1\u5A92\u6CB9\u934B\u7210\u8207\u7206\u70B8\u91CB\u653E\u7F3A\u5C08\u7AE0"), " - \u5FFD\u7565>300\xB0C\u71B1\u5A92\u6CB9\u4E4B\u6EF2\u6F0F\u8457\u706B\u98A8\u96AA\uFF0C\u4EA6\u7121\u7206\u70B8\u91CB\u653E\u95A5\u8A2D\u8A08\u6307\u5F15\u3002"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border rounded-lg p-4 bg-blue-50"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-bold text-blue-800 mb-2"
  }, "\u5EFA\u8B70\u6539\u9032\u65B9\u5411"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-disc pl-5 space-y-2 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u63A1\u53D6\u88FD\u7A0B\u5C0E\u5411\u98A8\u96AA\u8A55\u4F30"), " - \u53C3\u8003NFPA/FM\u7D93\u9A57\uFF0C\u91DD\u5C0D\u68C9\u82B1\u958B\u9B06\u3001\u71B1\u5A92\u6CB9\u3001\u7C89\u5875\u7B49\u7279\u5B9A\u88FD\u7A0B\u5236\u5B9A\u5C08\u7AE0\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u5C0E\u5165\u5B9A\u671FDHA\u8207Kst\u91CF\u5316"), " - \u4F9D\u7167NFPA 652, 654\u5EFA\u7ACB\u5F37\u5236\u6027\u7684\u7C89\u5875\u7206\u70B8\u98A8\u96AA\u8A55\u4F30\u6A5F\u5236\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u8A02\u5B9ALFL/LEL\u806F\u9396\u6578\u503C\u6A19\u6E96"), " - \u53C3\u8003FMDS 7-59 Stenter\u7684LFL 15%/20%\u6A19\u6E96\uFF0C\u8A2D\u5B9A\u660E\u78BA\u7684\u8B66\u5831/\u505C\u6A5F\u95BE\u503C\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u66F4\u65B0\u7051\u6C34\u8A2D\u8A08\u6307\u5F15"), " - \u8003\u616E\u7D21\u7E54\u54C1\u7279\u6027\u8207\u9AD8\u67B6\u5009\u5132\u7684\u5E03\u6372\u9670\u71C3\uFF0C\u8ABF\u6574\u5BC6\u5EA6\u8207\u5674\u982D\u5E03\u7F6E\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u5236\u5B9A\u71B1\u5A92\u6CB9\u5C08\u7528\u5B89\u5168\u898F\u7BC4"), " - \u5EFA\u7ACB\u71B1\u5A92\u6CB9\u7CFB\u7D71\u5C08\u7AE0\uFF0C\u6DB5\u84CB\u6A5F\u68B0\u5B8C\u6574\u6027\u3001\u6D29\u6F0F\u9632\u8B77\u3001\u7DCA\u6025\u505C\u6A5F\u7B49\u8981\u6C42\u3002"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\u589E\u8A02\u7D21\u7E54\u5C08\u7528\u9632\u7206\u5206\u5340\u6307\u5357"), " - \u53C3\u8003FMDS 1-7\u9644\u9304\uFF0C\u63D0\u4F9B\u7D21\u7E54\u696D\u5E38\u898B\u8A2D\u5099\u7684\u9632\u7206\u5206\u5340\u6A21\u677F\u3002"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 text-sm text-gray-600 text-center"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "*\u6B64\u5C0D\u6BD4\u5206\u6790\u57FA\u65BC2025\u5E74\u5404\u9805\u6CD5\u898F\u7248\u672C\uFF0C\u50C5\u4F9B\u98A8\u96AA\u7BA1\u7406\u53C3\u8003\uFF0C\u5BE6\u969B\u8A2D\u8A08\u61C9\u9075\u5FAA\u6700\u65B0\u6CD5\u898F\u8981\u6C42"))));
};
var _default = exports["default"] = RiskMatrix;


// 掛載到全局
window.ComparativeRiskMatrix = ComparativeRiskMatrix;
