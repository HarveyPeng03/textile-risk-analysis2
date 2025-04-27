// 從 textile-control-measures.tsx 轉換
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
var ControlMeasures = function ControlMeasures() {
  var _useState = (0, _react.useState)('cotton'),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    expandedMeasure = _useState4[0],
    setExpandedMeasure = _useState4[1];
  var factoryTypes = [{
    id: 'cotton',
    name: '棉紡織廠',
    icon: '🧵'
  }, {
    id: 'synthetic',
    name: '人造纖維廠',
    icon: '🧪'
  }, {
    id: 'weaving',
    name: '織布廠',
    icon: '🧶'
  }, {
    id: 'dyeing',
    name: '染整廠',
    icon: '🎨'
  }, {
    id: 'functional',
    name: '機能布料廠',
    icon: '🔬'
  }];
  var protectionSystems = {
    cotton: [{
      id: 'c1',
      title: '開鬆/清棉區粉塵爆炸防護',
      risk: '極高風險',
      riskColor: 'bg-red-600',
      description: '棉花開鬆與清棉過程會產生大量懸浮粉塵，粉塵濃度達到爆炸下限時，若有點火源存在，可能引發爆炸。',
      measures: [{
        title: '火花偵測與抑制系統',
        desc: '在集塵管道中安裝紅外線火花偵測器，連動自動滅火系統，在火花到達集塵機之前進行撲滅。',
        img: 'spark_detection.png',
        standard: 'NFPA 654 / FMDS 7-76'
      }, {
        title: '爆炸抑制與釋放設計',
        desc: '集塵設備配置爆炸抑制系統(HRD)或爆炸釋放閥，在爆炸初期控制或引導爆炸壓力，防止設備破裂。',
        img: 'explosion_suppression.png',
        standard: 'NFPA 68 / NFPA 69'
      }, {
        title: '防火隔離閥設計',
        desc: '在集塵管道系統的戰略位置安裝快速關閉的防火閘門，防止火焰蔓延到整個系統。',
        img: 'isolation_valve.png',
        standard: 'NFPA 654 § 7.1.4'
      }, {
        title: '集塵系統分區隔離',
        desc: '將集塵系統分為多個獨立區域，每個區域配置獨立的風機和過濾系統，避免單點故障引發廠區範圍事故。',
        img: 'zoning.png',
        standard: 'FMDS 7-76 / NFPA 654'
      }]
    }, {
      id: 'c2',
      title: '棉花/棉包倉庫火災防護',
      risk: '高風險',
      riskColor: 'bg-orange-500',
      description: '原棉倉庫存放大量高度可燃的棉包，火載量高且棉包內部可能發生自燃現象，一旦起火將難以撲滅。',
      measures: [{
        title: '早期抑制快速反應(ESFR)灑水系統',
        desc: 'ESFR系統使用大水滴、高動量噴頭，能夠快速穿透煙層直接撲滅火源，適合高火載量的棉包倉庫。',
        img: 'esfr.png',
        standard: 'NFPA 13 / FMDS 2-0'
      }, {
        title: '溫度監測與早期預警',
        desc: '使用紅外線熱像儀或光纖溫度感測系統，定期掃描棉包表面溫度，及早發現自燃跡象。',
        img: 'thermal_monitoring.png',
        standard: 'FMDS 8-1'
      }, {
        title: '堆垛間距與最大儲存高度管控',
        desc: '嚴格控制棉包堆垛之間的距離(至少1.8m)，並限制最大儲存高度，確保消防通道暢通及灑水系統覆蓋效果。',
        img: 'storage_config.png',
        standard: 'NFPA 13 Chapter 20'
      }, {
        title: '防煙與排煙設計',
        desc: '倉庫配置機械式排煙設備，大型倉庫設置煙簾與排煙區劃，提高消防人員能見度並控制煙霧蔓延。',
        img: 'smoke_control.png',
        standard: 'NFPA 204'
      }]
    }, {
      id: 'c3',
      title: '紡紗機電氣與機械火災防護',
      risk: '中高風險',
      riskColor: 'bg-yellow-500',
      description: '紡紗機運行時產生大量棉絮，同時具有大量電氣設備和高速運動部件，電氣短路或機械過熱可能引發火災。',
      measures: [{
        title: '自動清絮系統',
        desc: '安裝自動吸塵/清絮設備，定期清除機器周圍和內部累積的棉絮，減少可燃物質堆積。',
        img: 'lint_cleaning.png',
        standard: 'FMDS 7-1'
      }, {
        title: '電氣設備防塵保護',
        desc: '所有電氣設備採用密封防塵設計，配電箱採用IP54以上防護等級，定期熱成像檢測電氣連接點。',
        img: 'electrical_protection.png',
        standard: 'NFPA 70 / IEC 60529'
      }, {
        title: '局部自動滅火系統',
        desc: '在關鍵設備上方安裝獨立的自動滅火裝置，可採用水霧、泡沫或細水霧系統，針對性保護高風險點。',
        img: 'local_suppression.png',
        standard: 'NFPA 750 / FMDS 4-0'
      }, {
        title: '軸承溫度監測',
        desc: '在關鍵高速軸承處安裝溫度監測裝置，當溫度超過設定閾值時自動報警或停機。',
        img: 'bearing_monitoring.png',
        standard: 'FMDS 5-11'
      }]
    }],
    synthetic: [{
      id: 's1',
      title: '化學原料儲存區域防護',
      risk: '極高風險',
      riskColor: 'bg-red-600',
      description: '人造纖維工廠儲存大量化學原料，如PTA、EG、丙烯腈等，這些物質具有易燃、易揮發特性，部分具有毒性。',
      measures: [{
        title: '危險物品分級儲存',
        desc: '依據物質特性(易燃性、反應性、毒性)進行分區儲存，互相反應物質隔離存放，配置相應的滅火設備。',
        img: 'chemical_segregation.png',
        standard: 'NFPA 30 / FMDS 7-29'
      }, {
        title: '泡沫-水自動滅火系統',
        desc: '易燃液體儲存區安裝水成膜泡沫(AFFF)系統，能夠同時控制火勢並形成阻燃層防止復燃。',
        img: 'foam_system.png',
        standard: 'NFPA 16 / NFPA 11'
      }, {
        title: '氣體偵測與通風系統',
        desc: '安裝可燃氣體/有毒氣體偵測器，與強制通風系統連動，當氣體濃度達到LEL的20%時自動啟動排風並警報。',
        img: 'gas_detection.png',
        standard: 'NFPA 45 / FMDS 7-32'
      }, {
        title: '溢漏控制與二次圍堵',
        desc: '化學品儲存區設置防溢堤/集液池，能夠容納最大容器110%的容量，並配置適當的排放系統。',
        img: 'spill_containment.png',
        standard: 'NFPA 30 § 27.4 / EPA規範'
      }]
    }, {
      id: 's2',
      title: '熱媒油系統防護',
      risk: '極高風險',
      riskColor: 'bg-red-600',
      description: '熱媒油系統在人造纖維生產過程中用於提供高溫熱源，系統運行溫度通常在250-350°C，一旦洩漏極易引發重大火災。',
      measures: [{
        title: '熱媒管線完整性管理',
        desc: '實施嚴格的管線完整性計劃，包括定期超聲波測厚、焊縫檢測、壓力測試和熱成像檢查，及早發現潛在洩漏點。',
        img: 'pipeline_integrity.png',
        standard: 'FMDS 7-99 / API 570'
      }, {
        title: '熱媒油洩漏偵測',
        desc: '在關鍵區域安裝熱媒油洩漏檢測系統，包括液位/壓力監測、可燃氣體探測器和光學洩漏檢測，連動緊急停機系統。',
        img: 'leak_detection.png',
        standard: 'FMDS 7-99 / NFPA 87'
      }, {
        title: '雙重隔離與放空系統',
        desc: '熱媒油系統採用雙閥門隔離設計，管線配置合適的排放與放空系統，便於維修時安全排放。',
        img: 'double_isolation.png',
        standard: 'NFPA 87 § 8.8 / ASME B31.1'
      }, {
        title: '高溫表面保護',
        desc: '所有熱媒油管線與設備外表面保溫，表面溫度控制在60°C以下，減少意外接觸點火風險。',
        img: 'thermal_insulation.png',
        standard: 'FMDS 7-99 / ISO 12241'
      }]
    }, {
      id: 's3',
      title: '聚合反應與紡絲防護',
      risk: '高風險',
      riskColor: 'bg-orange-500',
      description: '聚合反應涉及高溫高壓操作，且部分反應具有放熱特性；紡絲過程使用熔融聚合物通過噴絲板擠出，溫度高且設備密集。',
      measures: [{
        title: '關鍵參數監控與聯鎖',
        desc: '建立多重參數(溫度、壓力、流量、黏度)監控系統，與緊急冷卻/停車系統聯鎖，防止反應失控。',
        img: 'process_control.png',
        standard: 'NFPA 77 / API RP 14C'
      }, {
        title: '應急冷卻/稀釋系統',
        desc: '配置獨立電源的應急冷卻系統，在反應異常時能夠快速降溫或注入阻聚劑，控制反應速率。',
        img: 'emergency_cooling.png',
        standard: 'CCPS Guidelines / FMDS 7-14'
      }, {
        title: '紡絲機專用滅火系統',
        desc: '紡絲機區域安裝CO₂或細水霧滅火系統，能夠在不損壞精密設備的情況下撲滅初期火災。',
        img: 'co2_system.png',
        standard: 'NFPA 12 / NFPA 750'
      }, {
        title: '熔體泵/齒輪泵保護',
        desc: '在關鍵泵設備上安裝剪切銷、溫度監測和振動監測，及早發現機械異常並防止過載。',
        img: 'pump_protection.png',
        standard: 'FMDS 5-14 / API RP 14B'
      }]
    }],
    weaving: [{
      id: 'w1',
      title: '織機區域火災防護',
      risk: '中高風險',
      riskColor: 'bg-yellow-500',
      description: '織機高速運行產生大量摩擦熱與飛絮，同時具有複雜的機械結構和電氣系統，是織布廠最常見的起火點。',
      measures: [{
        title: '織機絮屑管理系統',
        desc: '配置高效集塵系統並定期清理，特別注意梭子、綜絲框、打緯機構等絮屑易積聚區域，減少可燃物。',
        img: 'loom_cleaning.png',
        standard: 'FMDS 7-1 / NFPA 654'
      }, {
        title: '織機專用自動滅火裝置',
        desc: '在每台織機上方安裝獨立的自動滅火裝置，當織機區域發生火災時能夠及時滅火，防止蔓延。',
        img: 'loom_extinguishing.png',
        standard: 'FMDS 4-9 / NFPA 2001'
      }, {
        title: '織機區域分區防護',
        desc: '將織機區域分為多個防火分區，每區不超過1,500m²，並設置防火隔牆或防火捲簾進行分隔。',
        img: 'compartmentation.png',
        standard: 'NFPA 13 / IBC Section 707'
      }, {
        title: '紅外熱成像監測系統',
        desc: '安裝自動巡檢的紅外熱成像系統，實時監測織機運行溫度，及早發現異常熱點。',
        img: 'thermal_imaging.png',
        standard: 'FMDS 5-31 / ISO 18434-1'
      }]
    }, {
      id: 'w2',
      title: '經紗準備區域防護',
      risk: '中等風險',
      riskColor: 'bg-blue-500',
      description: '經紗準備過程包括整經、漿紗等工序，涉及大量紗線和漿料，靜電積累和加熱設備是主要風險點。',
      measures: [{
        title: '靜電消除系統',
        desc: '在整經機和漿紗機上安裝主動式靜電消除裝置，如電極離子發生器，降低靜電積累風險。',
        img: 'static_control.png',
        standard: 'NFPA 77 / FMDS 5-8'
      }, {
        title: '漿液加熱控制',
        desc: '漿紗過程中的加熱系統採用多重溫度控制與聯鎖保護，防止過熱並在異常時自動切斷能源。',
        img: 'heating_control.png',
        standard: 'NFPA 86 / FMDS 6-9'
      }, {
        title: '區域濕度控制',
        desc: '維持整經區域45-55%的相對濕度，降低靜電積累風險，同時避免紗線過於乾燥。',
        img: 'humidity_control.png',
        standard: 'NFPA 654 / FMDS 1-24'
      }, {
        title: '紗架防火隔離',
        desc: '大型紗架區採用防火分區設計，並配置合適的自動滅火系統，防止火災通過紗線快速蔓延。',
        img: 'creel_protection.png',
        standard: 'NFPA 13 / FMDS 2-0'
      }]
    }, {
      id: 'w3',
      title: '集塵系統防護',
      risk: '高風險',
      riskColor: 'bg-orange-500',
      description: '織布過程產生大量棉絮與粉塵，集塵系統將這些可燃物質集中處理，若發生火花進入可能引發嚴重火災或爆炸。',
      measures: [{
        title: '火花偵測與撲滅系統',
        desc: '在集塵管道中安裝紅外線火花偵測器，連動快速水噴灑系統，在火花到達集塵器前撲滅。',
        img: 'spark_detection_ex.png',
        standard: 'NFPA 654 / FMDS 7-78'
      }, {
        title: '集塵設備接地與防靜電',
        desc: '所有集塵系統金屬部件可靠接地(≤10Ω)，管道使用防靜電材料，防止靜電放電引發火災。',
        img: 'grounding.png',
        standard: 'NFPA 77 / FMDS 5-8'
      }, {
        title: '濕式除塵器應用',
        desc: '在風險較高的區域採用濕式除塵器，通過水幕或濕潤介質捕獲粉塵，降低爆炸風險。',
        img: 'wet_collector.png',
        standard: 'NFPA 654 / FMDS 7-76'
      }, {
        title: '集塵系統防爆設計',
        desc: '乾式集塵器採用爆炸泄壓或抑制系統，泄壓口朝向安全方向，防止爆炸事故造成次生災害。',
        img: 'dust_explosion_protection.png',
        standard: 'NFPA 68 / NFPA 69'
      }]
    }],
    dyeing: [{
      id: 'd1',
      title: '定型機/烘箱防護',
      risk: '極高風險',
      riskColor: 'bg-red-600',
      description: '定型機/烘箱是高溫設備，處理帶有溶劑、助劑的布料，溶劑揮發形成易燃氣體，也可能積聚在設備死角形成爆炸性混合物。',
      measures: [{
        title: '烘箱可燃氣體濃度監控',
        desc: '安裝連續監測可燃氣體濃度的系統，當濃度達到LEL的15%時警報，20%時自動停機並惰化。',
        img: 'gas_monitoring.png',
        standard: 'NFPA 86 / FMDS 6-9'
      }, {
        title: '強制通風系統',
        desc: '烘箱配置高可靠性的強制通風系統，確保換氣率≥8次/小時，並設置氣流監測與聯鎖保護。',
        img: 'ventilation.png',
        standard: 'NFPA 86 § 11.6 / FMDS 7-59'
      }, {
        title: '惰化系統',
        desc: '配置氮氣或二氧化碳惰化系統，在偵測到危險情況時自動啟動，降低烘箱腔體內氧氣濃度至安全水平。',
        img: 'inerting.png',
        standard: 'NFPA 69 / FMDS 7-59'
      }, {
        title: '高溫監控與聯鎖',
        desc: '多點溫度傳感器監測烘箱溫度，與加熱系統聯鎖，並設置獨立的過溫保護裝置。',
        img: 'temperature_control.png',
        standard: 'NFPA 86 § 8.17 / FMDS 6-9'
      }]
    }, {
      id: 'd2',
      title: '染料與化學品區域防護',
      risk: '高風險',
      riskColor: 'bg-orange-500',
      description: '染料和化學助劑區域儲存使用多種化學品，部分具有易燃、氧化或反應性，混合不當可能引發火災、爆炸或產生有毒氣體。',
      measures: [{
        title: '化學品兼容性管理',
        desc: '實施嚴格的化學品相容性管理系統，確保不相容化學品分開儲存，並配置適當的標識和員工培訓。',
        img: 'chemical_compatibility.png',
        standard: 'NFPA 400 / FMDS 7-29'
      }, {
        title: '染料倉儲自動滅火',
        desc: '染料倉庫安裝自動噴灑系統，考慮特殊染料特性選擇合適的滅火劑，防止反應性滅火問題。',
        img: 'dye_storage_protection.png',
        standard: 'NFPA 13 / FMDS 8-9'
      }, {
        title: '秤料區域局部排風',
        desc: '化學品秤料和混合區域安裝局部排風系統(LEV)，捕獲揮發性物質並降低工作區域濃度。',
        img: 'local_exhaust.png',
        standard: 'NFPA 45 / ACGIH Guidelines'
      }, {
        title: '溢漏控制與應急處理',
        desc: '化學品區域設置防溢堤、洩漏報警和應急中和/吸附材料，快速控制洩漏事故。',
        img: 'spill_response.png',
        standard: 'NFPA 400 / FMDS 7-83'
      }]
    }, {
      id: 'd3',
      title: '染色機防護',
      risk: '中高風險',
      riskColor: 'bg-yellow-500',
      description: '染色設備常在高溫高壓條件下運行，使用蒸汽和熱水，並涉及多種化學品，控制系統故障可能導致過壓或過熱情況。',
      measures: [{
        title: '染色機安全閥與洩壓系統',
        desc: '染色機配置適當的安全閥和洩壓系統，防止壓力超過設計限值，安全閥定期測試和校驗。',
        img: 'pressure_relief.png',
        standard: 'ASME BPVC Section VIII / FMDS 7-95'
      }, {
        title: '染色機控制系統冗餘設計',
        desc: '染色機控制系統採用冗餘設計，關鍵參數(溫度、壓力、液位)有獨立的監測和保護系統。',
        img: 'control_redundancy.png',
        standard: 'NFPA 85 / IEC 61511'
      }, {
        title: '布卷輸送系統防護',
        desc: '布卷輸送系統設置過載保護和異物檢測，防止卡料引發摩擦和過熱。',
        img: 'transport_protection.png',
        standard: 'ANSI/ASME B20.1 / FMDS 7-11'
      }, {
        title: '染色機區域排水系統',
        desc: '染色機區域設置適當的排水系統，防止化學品混合和積累，地面採用防腐防滑材料。',
        img: 'drainage.png',
        standard: 'IBC Chapter 8 / NFPA 30'
      }]
    }],
    functional: [{
      id: 'f1',
      title: '塗層與薄膜加工防護',
      risk: '極高風險',
      riskColor: 'bg-red-600',
      description: '功能性塗層過程通常使用溶劑型塗層材料，這些材料揮發的溶劑形成易燃氣體，同時塗層設備通常包含加熱元件。',
      measures: [{
        title: '溶劑回收與處理系統',
        desc: '塗布機配置封閉式溶劑回收系統，捕獲揮發的溶劑並進行冷凝回收，降低工作環境中的可燃氣體濃度。',
        img: 'solvent_recovery.png',
        standard: 'NFPA 86 Appendix B / FMDS 7-32'
      }, {
        title: '不活性氣體保護系統',
        desc: '在高風險區域引入氮氣等惰性氣體，降低氧氣濃度至燃燒下限以下(通常<12%)，防止形成爆炸性混合物。',
        img: 'inert_gas.png',
        standard: 'NFPA 69 / FMDS 7-59'
      }, {
        title: '防爆電氣設備',
        desc: '塗層區域所有電氣設備採用適當等級的防爆設計(如Ex d, Ex p等)，防止電氣火花引發爆炸。',
        img: 'explosion_proof.png',
        standard: 'NFPA 70 Article 500 / IEC 60079'
      }, {
        title: '緊急排風與稀釋系統',
        desc: '配置高可靠性的緊急排風系統，在偵測到異常時能夠快速稀釋溶劑濃度至安全水平。',
        img: 'emergency_ventilation.png',
        standard: 'NFPA 91 / FMDS 1-53'
      }]
    }, {
      id: 'f2',
      title: '功能性整理設備防護',
      risk: '高風險',
      riskColor: 'bg-orange-500',
      description: '功能性整理設備如等離子體處理、紫外線固化、電子束處理等，涉及高能量源，處理過程中可能產生熱點或火花。',
      measures: [{
        title: '設備隔離與屏蔽',
        desc: '高能設備採用適當的隔離和屏蔽設計，防止能量外泄並配置多重安全聯鎖裝置。',
        img: 'equipment_isolation.png',
        standard: 'NFPA 70E / IEC 61508'
      }, {
        title: '冷卻系統冗餘設計',
        desc: '關鍵設備採用冗餘冷卻系統設計，確保單一冷卻系統故障時仍能維持安全運行，並配置冷卻故障自動停機功能。',
        img: 'cooling_redundancy.png',
        standard: 'FMDS 6-4 / IEEE 493'
      }, {
        title: '紫外線/電子束設備保護',
        desc: '紫外線固化和電子束處理設備設置多重安全聯鎖和屏蔽設計，確保能量正確引導並防止外泄。',
        img: 'radiation_protection.png',
        standard: 'NFPA 70E / IEC 62471'
      }, {
        title: '局部氣體滅火系統',
        desc: '在關鍵設備內部安裝惰性氣體滅火系統，能夠在不損壞精密電子設備的情況下撲滅初期火災。',
        img: 'local_fire_suppression.png',
        standard: 'NFPA 2001 / FMDS 4-9'
      }]
    }, {
      id: 'f3',
      title: '機能性材料儲存防護',
      risk: '中高風險',
      riskColor: 'bg-yellow-500',
      description: '機能性材料包括防水、阻燃、抗UV等多種特殊處理的布料，部分含有化學添加劑或塗層，具有特殊燃燒特性。',
      measures: [{
        title: '專用倉儲區隔離',
        desc: '機能性材料按照化學特性和燃燒特性分區儲存，特殊材料專區儲存並配置適合的滅火系統。',
        img: 'segregated_storage.png',
        standard: 'NFPA 13 / FMDS 8-1'
      }, {
        title: '環境控制系統',
        desc: '儲存區域配置溫濕度控制系統，避免極端環境條件引發材料變質或反應，減少自燃風險。',
        img: 'environmental_control.png',
        standard: 'FMDS 1-24 / ASHRAE Guidelines'
      }, {
        title: '特殊材料監測',
        desc: '對高風險材料實施特殊監測，如氣體偵測、溫度監測、煙霧早期偵測等，及早發現異常。',
        img: 'material_monitoring.png',
        standard: 'NFPA 72 / FMDS 5-48'
      }, {
        title: '應急處置與專項預案',
        desc: '針對特殊機能材料制定專項應急預案，配置專用滅火劑和處置裝備，定期演練。',
        img: 'emergency_planning.png',
        standard: 'NFPA 1620 / FMDS 10-0'
      }]
    }]
  };

  // 展開/收合措施詳情
  var toggleMeasure = function toggleMeasure(id) {
    if (expandedMeasure === id) {
      setExpandedMeasure(null);
    } else {
      setExpandedMeasure(id);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full p-4 bg-white rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold text-center mb-4"
  }, "\u7D21\u7E54\u696D\u706B\u707D\u98A8\u96AA\u9632\u8B77\u5C0D\u7B56\u5C55\u793A"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap mb-6"
  }, factoryTypes.map(function (type) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: type.id,
      className: "flex items-center px-4 py-2 rounded-full mr-2 mb-2 ".concat(activeTab === type.id ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'),
      onClick: function onClick() {
        return setActiveTab(type.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "mr-2 text-lg"
    }, type.icon), /*#__PURE__*/_react["default"].createElement("span", null, type.name));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-6"
  }, protectionSystems[activeTab].map(function (system) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: system.id,
      className: "border rounded-lg shadow-md overflow-hidden"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "px-4 py-3 ".concat(system.riskColor, " text-white flex justify-between items-center")
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "text-lg font-bold"
    }, system.title), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-sm font-semibold px-2 py-1 bg-white bg-opacity-30 rounded"
    }, system.risk)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "p-4"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "mb-4 text-gray-700"
    }, system.description), /*#__PURE__*/_react["default"].createElement("h4", {
      className: "font-bold text-gray-700 mb-2"
    }, "\u95DC\u9375\u9632\u8B77\u63AA\u65BD\uFF1A"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
    }, system.measures.map(function (measure, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        className: "border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors",
        onClick: function onClick() {
          return toggleMeasure("".concat(system.id, "-").concat(index));
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-between items-center"
      }, /*#__PURE__*/_react["default"].createElement("h5", {
        className: "font-semibold text-blue-800"
      }, measure.title), /*#__PURE__*/_react["default"].createElement("span", {
        className: "text-blue-600"
      }, expandedMeasure === "".concat(system.id, "-").concat(index) ? '▲' : '▼')), expandedMeasure === "".concat(system.id, "-").concat(index) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-3 pt-3 border-t"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "text-gray-700 mb-2"
      }, measure.desc), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-between items-center mt-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "w-4 h-4 text-green-600 mr-1",
        fill: "currentColor",
        viewBox: "0 0 20 20"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        clipRule: "evenodd"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "text-sm font-medium text-gray-600"
      }, "\u4F9D\u64DA\u6A19\u6E96\uFF1A")), /*#__PURE__*/_react["default"].createElement("span", {
        className: "text-sm font-semibold text-blue-600"
      }, measure.standard))));
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mt-3 text-sm text-gray-500 flex justify-end"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "mr-2"
    }, "\u9069\u7528\u898F\u7BC4\uFF1A"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "px-2 bg-blue-100 text-blue-800 rounded"
    }, "FM Global"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "mx-1"
    }, "|"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "px-2 bg-red-100 text-red-800 rounded"
    }, "NFPA"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "mx-1"
    }, "|"), /*#__PURE__*/_react["default"].createElement("span", {
      className: "px-2 bg-green-100 text-green-800 rounded"
    }, "\u53F0\u7063\u6D88\u9632\u6CD5\u898F"))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-8 p-4 border rounded-lg bg-blue-50"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold text-center mb-3"
  }, "\u7D21\u7E54\u696D\u706B\u707D\u98A8\u96AA\u7D9C\u5408\u9632\u8B77\u539F\u5247"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white p-3 rounded shadow-sm"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold text-red-700 mb-2 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-5 h-5 mr-2",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
    clipRule: "evenodd"
  })), "\u9810\u9632\u539F\u5247"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "text-sm space-y-1 pl-3"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "\u88FD\u7A0B\u5371\u5BB3\u7CFB\u7D71\u8A55\u4F30(PHA)"), /*#__PURE__*/_react["default"].createElement("li", null, "\u8A2D\u5099\u53EF\u9760\u6027\u7BA1\u7406(RCM)"), /*#__PURE__*/_react["default"].createElement("li", null, "\u56B4\u683C\u7684\u71B1\u5DE5\u4F5C\u7BA1\u5236"), /*#__PURE__*/_react["default"].createElement("li", null, "\u53EF\u71C3\u7269\u7D2F\u7A4D\u63A7\u5236"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white p-3 rounded shadow-sm"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold text-yellow-700 mb-2 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-5 h-5 mr-2",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  })), "\u5075\u6E2C\u539F\u5247"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "text-sm space-y-1 pl-3"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "\u65E9\u671F\u7159\u9727\u5075\u6E2C\u7CFB\u7D71"), /*#__PURE__*/_react["default"].createElement("li", null, "\u706B\u82B1\u5075\u6E2C\u8207\u6291\u5236"), /*#__PURE__*/_react["default"].createElement("li", null, "\u53EF\u71C3\u6C23\u9AD4\u6FC3\u5EA6\u76E3\u6E2C"), /*#__PURE__*/_react["default"].createElement("li", null, "\u71B1\u9EDE\u5075\u6E2C\u8207\u71B1\u6210\u50CF"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white p-3 rounded shadow-sm"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold text-blue-700 mb-2 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-5 h-5 mr-2",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  })), "\u6291\u5236\u539F\u5247"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "text-sm space-y-1 pl-3"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "\u81EA\u52D5\u6EC5\u706B\u7CFB\u7D71\u8A2D\u8A08"), /*#__PURE__*/_react["default"].createElement("li", null, "\u7279\u6B8A\u5371\u5BB3\u5340\u5C08\u7528\u7CFB\u7D71"), /*#__PURE__*/_react["default"].createElement("li", null, "\u9632\u706B\u5340\u5283\u8207\u963B\u9694"), /*#__PURE__*/_react["default"].createElement("li", null, "\u7DCA\u6025\u505C\u8ECA\u8207\u9694\u96E2"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white p-3 rounded shadow-sm"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold text-green-700 mb-2 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-5 h-5 mr-2",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  })), "\u7BA1\u7406\u539F\u5247"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "text-sm space-y-1 pl-3"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "\u98A8\u96AA\u8A55\u4F30\u8207\u5BE9\u6838"), /*#__PURE__*/_react["default"].createElement("li", null, "\u5B89\u5168\u57F9\u8A13\u8207\u6F14\u7DF4"), /*#__PURE__*/_react["default"].createElement("li", null, "\u9810\u9632\u6027\u7DAD\u8B77\u8A08\u5283"), /*#__PURE__*/_react["default"].createElement("li", null, "\u8B8A\u66F4\u7BA1\u7406(MOC)"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 text-sm text-gray-500 text-center"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "* \u6240\u6709\u9632\u8B77\u63AA\u65BD\u61C9\u6839\u64DA\u5BE6\u969B\u5EE0\u5340\u72C0\u6CC1\u3001\u98A8\u96AA\u8A55\u4F30\u7D50\u679C\u548C\u9069\u7528\u6CD5\u898F\u9032\u884C\u5177\u9AD4\u8A2D\u8A08\u8207\u5BE6\u65BD")));
};
var _default = exports["default"] = ControlMeasures;


// 掛載到全局
window.TextileControlMeasures = TextileControlMeasures;
