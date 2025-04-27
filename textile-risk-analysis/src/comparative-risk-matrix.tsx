import React, { useState } from 'react';

const RiskMatrix = () => {
  const [activeTab, setActiveTab] = useState('matrix');
  
  // 風險矩陣數據
  const riskMatrix = [
    { id: 1, process: '棉花開鬆/清理', likelihood: 5, severity: 4, risk: 20, category: '極高風險', color: 'bg-red-600' },
    { id: 2, process: '熱媒油系統', likelihood: 4, severity: 5, risk: 20, category: '極高風險', color: 'bg-red-600' },
    { id: 3, process: '染料混合區', likelihood: 4, severity: 4, risk: 16, category: '高風險', color: 'bg-orange-500' },
    { id: 4, process: '化學纖維聚合', likelihood: 3, severity: 5, risk: 15, category: '高風險', color: 'bg-orange-500' },
    { id: 5, process: '織布機/織造', likelihood: 4, severity: 3, risk: 12, category: '中高風險', color: 'bg-yellow-500' },
    { id: 6, process: '定型機/烘箱', likelihood: 3, severity: 4, risk: 12, category: '中高風險', color: 'bg-yellow-500' },
    { id: 7, process: '紡紗設備', likelihood: 3, severity: 3, risk: 9, category: '中等風險', color: 'bg-blue-500' },
    { id: 8, process: '塗佈加工', likelihood: 3, severity: 3, risk: 9, category: '中等風險', color: 'bg-blue-500' },
    { id: 9, process: '成品儲存', likelihood: 2, severity: 4, risk: 8, category: '中等風險', color: 'bg-blue-500' },
    { id: 10, process: '機械加工區', likelihood: 2, severity: 3, risk: 6, category: '低風險', color: 'bg-green-500' },
  ];

  // 法規對照表數據
  const regulations = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ];

  return (
    <div className="w-full p-4 bg-white rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">紡織業風險矩陣與法規對照分析</h2>
      
      {/* 切換標籤 */}
      <div className="flex border-b mb-4">
        <button 
          className={`px-4 py-2 font-semibold ${activeTab === 'matrix' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('matrix')}
        >
          風險矩陣
        </button>
        <button 
          className={`px-4 py-2 font-semibold ${activeTab === 'regulations' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('regulations')}
        >
          法規對照表
        </button>
      </div>
      
      {/* 風險矩陣內容 */}
      {activeTab === 'matrix' && (
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">紡織業製程風險評估矩陣</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">製程/設備</th>
                    <th className="border px-4 py-2">可能性 (1-5)</th>
                    <th className="border px-4 py-2">嚴重性 (1-5)</th>
                    <th className="border px-4 py-2">風險值 (L×S)</th>
                    <th className="border px-4 py-2">風險等級</th>
                  </tr>
                </thead>
                <tbody>
                  {riskMatrix.map(item => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{item.process}</td>
                      <td className="border px-4 py-2 text-center">{item.likelihood}</td>
                      <td className="border px-4 py-2 text-center">{item.severity}</td>
                      <td className="border px-4 py-2 text-center font-bold">{item.risk}</td>
                      <td className="border px-4 py-2">
                        <span className={`inline-block px-2 py-1 rounded text-white text-sm ${item.color}`}>
                          {item.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* 風險視覺化矩陣 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">風險視覺化矩陣</h3>
            <div className="grid grid-cols-6 gap-0 border border-gray-300">
              {/* 標題列 */}
              <div className="col-span-1 border bg-gray-100 p-2 flex items-center justify-center font-bold">可能性 \ 嚴重性</div>
              {[1, 2, 3, 4, 5].map(severity => (
                <div key={severity} className="border bg-gray-100 p-2 text-center font-semibold">
                  {severity} {severity === 1 ? '(輕微)' : severity === 5 ? '(災難性)' : ''}
                </div>
              ))}
              
              {/* 矩陣內容 */}
              {[5, 4, 3, 2, 1].map(likelihood => (
                <React.Fragment key={likelihood}>
                  <div className="border p-2 bg-gray-100 font-semibold text-center">
                    {likelihood} {likelihood === 1 ? '(罕見)' : likelihood === 5 ? '(幾乎確定)' : ''}
                  </div>
                  {[1, 2, 3, 4, 5].map(severity => {
                    const risk = likelihood * severity;
                    let colorClass = 'bg-green-100 border-green-500';
                    if (risk >= 15) colorClass = 'bg-red-100 border-red-500';
                    else if (risk >= 10) colorClass = 'bg-orange-100 border-orange-500';
                    else if (risk >= 5) colorClass = 'bg-yellow-100 border-yellow-500';
                    
                    // 找出此風險等級的製程
                    const processes = riskMatrix.filter(item => 
                      item.likelihood === likelihood && 
                      item.severity === severity
                    ).map(item => item.process);
                    
                    return (
                      <div key={severity} className={`border-2 p-2 text-center ${colorClass}`}>
                        <div className="font-bold">{risk}</div>
                        {processes.length > 0 && (
                          <div className="text-xs mt-1 max-h-12 overflow-y-auto">
                            {processes.join(', ')}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-3">
              <div className="p-2 bg-red-100 border-2 border-red-500 text-center text-sm">
                15-25: 極高風險<br/>需立即採取控制措施
              </div>
              <div className="p-2 bg-orange-100 border-2 border-orange-500 text-center text-sm">
                10-14: 高風險<br/>需優先規劃控制措施
              </div>
              <div className="p-2 bg-yellow-100 border-2 border-yellow-500 text-center text-sm">
                5-9: 中等風險<br/>需定期監控並改進
              </div>
              <div className="p-2 bg-green-100 border-2 border-green-500 text-center text-sm">
                1-4: 低風險<br/>可接受但需關注
              </div>
            </div>
          </div>
          
          {/* 主要風險點分佈 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">紡織業各類工廠主要風險點分佈</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded p-3">
                <h4 className="font-bold text-blue-800 border-b pb-1 mb-2">棉紡織廠</h4>
                <ul className="space-y-1 text-sm">
                  <li><span className="inline-block w-3 h-3 bg-red-600 mr-2"></span>開鬆/清棉區(粉塵爆炸與火災)</li>
                  <li><span className="inline-block w-3 h-3 bg-orange-500 mr-2"></span>紡紗機運行區(機械過熱與飛絮)</li>
                  <li><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>棉花/棉紗倉庫(火載量與自燃)</li>
                  <li><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>集塵系統(粉塵累積與火花)</li>
                </ul>
              </div>
              
              <div className="border rounded p-3">
                <h4 className="font-bold text-blue-800 border-b pb-1 mb-2">人造纖維廠</h4>
                <ul className="space-y-1 text-sm">
                  <li><span className="inline-block w-3 h-3 bg-red-600 mr-2"></span>熱媒油系統(洩漏與氣爆)</li>
                  <li><span className="inline-block w-3 h-3 bg-red-600 mr-2"></span>化學原料儲存(易燃液體)</li>
                  <li><span className="inline-block w-3 h-3 bg-orange-500 mr-2"></span>聚合反應區(放熱與失控)</li>
                  <li><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>紡絲設備(高溫表面)</li>
                </ul>
              </div>
              
              <div className="border rounded p-3">
                <h4 className="font-bold text-blue-800 border-b pb-1 mb-2">織布廠</h4>
                <ul className="space-y-1 text-sm">
                  <li><span className="inline-block w-3 h-3 bg-orange-500 mr-2"></span>織機運行區(摩擦與短路)</li>
                  <li><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>經紗準備區(紗架與靜電)</li>
                  <li><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>集塵設備(粉塵積聚)</li>
                  <li><span className="inline-block w-3 h-3 bg-blue-500 mr-2"></span>整經設備(機械損傷)</li>
                </ul>
              </div>
              
              <div className="border rounded p-3">
                <h4 className="font-bold text-blue-800 border-b pb-1 mb-2">染整廠</h4>
                <ul className="space-y-1 text-sm">
                  <li><span className="inline-block w-3 h-3 bg-red-600 mr-2"></span>定型機/烘箱(高溫與溶劑)</li>
                  <li><span className="inline-block w-3 h-3 bg-orange-500 mr-2"></span>染料混合區(化學反應)</li>
                  <li><span className="inline-block w-3 h-3 bg-orange-500 mr-2"></span>蒸煮設備(高壓蒸汽)</li>
                  <li><span className="inline-block w-3 h-3 bg-yellow-500 mr-2"></span>廢水處理區(有害氣體)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 法規對照表內容 */}
      {activeTab === 'regulations' && (
        <div>
          <h3 className="text-lg font-semibold mb-2">台灣紡織業防火安全法規與國際標準對照</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 w-1/6">風險區域</th>
                  <th className="border px-4 py-2 w-5/18">台灣現行法規</th>
                  <th className="border px-4 py-2 w-5/18">NFPA標準</th>
                  <th className="border px-4 py-2 w-5/18">FM Global標準</th>
                </tr>
              </thead>
              <tbody>
                {regulations.map((reg, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border px-4 py-2 font-semibold">{reg.riskArea}</td>
                    <td className="border px-3 py-2">
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">依據: </span>
                        <span dangerouslySetInnerHTML={{ __html: reg.taiwanRegs.code }} />
                      </div>
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">要求: </span>
                        {reg.taiwanRegs.requirement}
                      </div>
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">評級: </span>
                        <span className={`px-1 py-0.5 rounded text-xs text-white ${
                          reg.taiwanRegs.rating === '基本' ? 'bg-yellow-500' : 
                          reg.taiwanRegs.rating === '不足' ? 'bg-red-500' : 'bg-blue-500'
                        }`}>
                          {reg.taiwanRegs.rating}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">缺口: </span>
                        <span className="text-red-600">{reg.taiwanRegs.gaps}</span>
                      </div>
                    </td>
                    <td className="border px-3 py-2">
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">依據: </span>
                        <span dangerouslySetInnerHTML={{ __html: reg.nfpaRegs.code }} />
                      </div>
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">要求: </span>
                        <span dangerouslySetInnerHTML={{ __html: reg.nfpaRegs.requirement }} />
                      </div>
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">評級: </span>
                        <span className="px-1 py-0.5 rounded text-xs text-white bg-blue-500">
                          {reg.nfpaRegs.rating}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">優勢: </span>
                        <span className="text-green-600">{reg.nfpaRegs.advantage}</span>
                      </div>
                    </td>
                    <td className="border px-3 py-2">
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">依據: </span>
                        {reg.fmRegs.code}
                      </div>
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">要求: </span>
                        {reg.fmRegs.requirement}
                      </div>
                      <div className="mb-1">
                        <span className="font-semibold text-gray-700">評級: </span>
                        <span className="px-1 py-0.5 rounded text-xs text-white bg-purple-600">
                          {reg.fmRegs.rating}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">優勢: </span>
                        <span className="text-blue-600">{reg.fmRegs.advantage}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">法規落差與建議改進方向</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 bg-orange-50">
                <h4 className="font-bold text-orange-800 mb-2">主要法規落差</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><span className="font-semibold">以「材料類別」而非「製程危害」分類</span> - 台灣法規多將紡織廠視為C-1「特殊工廠類」，僅依危險物(量)納管。</li>
                  <li><span className="font-semibold">無「粉塵危害分析(DHA)」強制條款</span> - NFPA 652自2020年起要求可燃粉塵製程每5年重做DHA。</li>
                  <li><span className="font-semibold">靜電 & LEL量化門檻缺位</span> - 目前僅規定「有效消除靜電」，但未規定接地電阻≤1MΩ或LFL 20%聯鎖。</li>
                  <li><span className="font-semibold">自動消防系統「遮蔽因素」未特化</span> - 未考慮棉絮遮蔽噴頭的特殊情況，不如NFPA/FM要求的多方向噴頭設計。</li>
                  <li><span className="font-semibold">熱媒油鍋爐與爆炸釋放缺專章</span> - 忽略>300°C熱媒油之滲漏著火風險，亦無爆炸釋放閥設計指引。</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4 bg-blue-50">
                <h4 className="font-bold text-blue-800 mb-2">建議改進方向</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><span className="font-semibold">採取製程導向風險評估</span> - 參考NFPA/FM經驗，針對棉花開鬆、熱媒油、粉塵等特定製程制定專章。</li>
                  <li><span className="font-semibold">導入定期DHA與Kst量化</span> - 依照NFPA 652, 654建立強制性的粉塵爆炸風險評估機制。</li>
                  <li><span className="font-semibold">訂定LFL/LEL聯鎖數值標準</span> - 參考FMDS 7-59 Stenter的LFL 15%/20%標準，設定明確的警報/停機閾值。</li>
                  <li><span className="font-semibold">更新灑水設計指引</span> - 考慮紡織品特性與高架倉儲的布捲陰燃，調整密度與噴頭布置。</li>
                  <li><span className="font-semibold">制定熱媒油專用安全規範</span> - 建立熱媒油系統專章，涵蓋機械完整性、洩漏防護、緊急停機等要求。</li>
                  <li><span className="font-semibold">增訂紡織專用防爆分區指南</span> - 參考FMDS 1-7附錄，提供紡織業常見設備的防爆分區模板。</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>*此對比分析基於2025年各項法規版本，僅供風險管理參考，實際設計應遵循最新法規要求</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskMatrix;
