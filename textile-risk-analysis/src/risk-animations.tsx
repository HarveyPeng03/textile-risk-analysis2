import React, { useState, useEffect } from 'react';

const RiskAnimations = () => {
  // 火災三要素動態展示的狀態
  const [oxygenLevel, setOxygenLevel] = useState(30);
  const [fuelLevel, setFuelLevel] = useState(30);
  const [heatLevel, setHeatLevel] = useState(30);
  const [fireState, setFireState] = useState("none"); // none, starting, burning, explosion
  
  // 粉塵爆炸風險動態展示的狀態
  const [dustConcentration, setDustConcentration] = useState(15);
  const [dustExplosionRisk, setDustExplosionRisk] = useState("low");
  
  // 化學原料風險動態展示
  const [chemical, setChemical] = useState("PTA");
  
  // 自動更新火災三要素的動畫
  useEffect(() => {
    const interval = setInterval(() => {
      setOxygenLevel(prev => {
        const newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
      
      setFuelLevel(prev => {
        const newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
      
      setHeatLevel(prev => {
        const newValue = prev + Math.random() * 10 - 5;
        return Math.max(10, Math.min(80, newValue));
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // 檢查火災狀態
  useEffect(() => {
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
  useEffect(() => {
    const interval = setInterval(() => {
      setDustConcentration(prev => {
        const newValue = prev + Math.random() * 6 - 3;
        return Math.max(5, Math.min(50, newValue));
      });
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  // 檢查粉塵爆炸風險
  useEffect(() => {
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
  
  const getFireStyleClass = () => {
    switch(fireState) {
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
  
  const getDustStyleClass = () => {
    switch(dustExplosionRisk) {
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
  useEffect(() => {
    const chemicals = ["PTA", "EG", "CPL", "HMDA", "Adipic Acid", "AN", "Propylene"];
    const interval = setInterval(() => {
      setChemical(chemicals[Math.floor(Math.random() * chemicals.length)]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full p-4 bg-white rounded-lg space-y-8">
      <h2 className="text-xl font-bold text-center">紡織業風險動態視覺化</h2>
      
      {/* 火災三要素動態展示 */}
      <div className="border rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-bold mb-3">火災三要素動態模擬</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-blue-600 font-semibold">氧氣 (空氣)</div>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-500 ease-in-out" 
                style={{ width: `${oxygenLevel}%` }}
              ></div>
            </div>
            <div className="mt-1">{oxygenLevel.toFixed(1)}%</div>
          </div>
          
          <div className="text-center">
            <div className="text-yellow-600 font-semibold">燃料 (紡織原料)</div>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500 transition-all duration-500 ease-in-out" 
                style={{ width: `${fuelLevel}%` }}
              ></div>
            </div>
            <div className="mt-1">{fuelLevel.toFixed(1)}%</div>
          </div>
          
          <div className="text-center">
            <div className="text-red-600 font-semibold">熱源 (點火源)</div>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-500 transition-all duration-500 ease-in-out" 
                style={{ width: `${heatLevel}%` }}
              ></div>
            </div>
            <div className="mt-1">{heatLevel.toFixed(1)}%</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${getFireStyleClass()}`}>
            <span className="text-white font-bold text-center">
              {fireState === "explosion" ? "爆炸風險!" : 
               fireState === "burning" ? "火災!" : 
               fireState === "starting" ? "起火中" : "安全狀態"}
            </span>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p className="text-center">當三要素同時達到高濃度時，火災風險急劇上升</p>
        </div>
      </div>
      
      {/* 粉塵爆炸風險動態展示 */}
      <div className="border rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-bold mb-3">棉絮/粉塵爆炸風險動態模擬</h3>
        
        <div className="mb-4">
          <div className="text-gray-700 font-semibold mb-1">懸浮粉塵濃度 (g/m³)</div>
          <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ease-in-out ${getDustStyleClass()}`}
              style={{ width: `${dustConcentration * 2}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>安全範圍</span>
            <span>爆炸下限</span>
            <span>最佳爆炸濃度</span>
            <span>爆炸上限</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-bold">{dustConcentration.toFixed(1)}</div>
            <div className="text-sm">g/m³</div>
          </div>
          
          <div className="text-center px-4 py-2 rounded-lg font-bold" 
               style={{ 
                 backgroundColor: dustExplosionRisk === "extreme" ? "#dc2626" : 
                                 dustExplosionRisk === "high" ? "#ef4444" : 
                                 dustExplosionRisk === "medium" ? "#f59e0b" : "#22c55e",
                 color: "white"
               }}>
            {dustExplosionRisk === "extreme" ? "極度危險!" : 
             dustExplosionRisk === "high" ? "高風險" : 
             dustExplosionRisk === "medium" ? "中度風險" : "低風險"}
          </div>
          
          <div className="text-center">
            <div className="text-sm">爆炸指數</div>
            <div className="text-xl font-bold">Kst {dustExplosionRisk === "extreme" ? ">300" : 
                                              dustExplosionRisk === "high" ? "200-300" : 
                                              dustExplosionRisk === "medium" ? "50-200" : "<50"}</div>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p className="text-center">當粉塵濃度達到爆炸範圍且遇到點火源時，將引發爆炸</p>
        </div>
      </div>
      
      {/* 化學原料風險提示 */}
      <div className="border rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-bold mb-3">化學原料風險快速提示</h3>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-700">{chemical}</div>
          
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-1 mb-2">
              {chemical === "PTA" && (
                <>
                  <div className="bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm">粉塵爆炸</div>
                  <div className="bg-blue-500 text-white text-center px-2 py-1 rounded text-sm">靜電危害</div>
                  <div className="bg-red-500 text-white text-center px-2 py-1 rounded text-sm">高溫分解</div>
                </>
              )}
              {chemical === "EG" && (
                <>
                  <div className="bg-red-500 text-white text-center px-2 py-1 rounded text-sm">可燃液體</div>
                  <div className="bg-purple-500 text-white text-center px-2 py-1 rounded text-sm">蒸氣爆炸</div>
                  <div className="bg-orange-500 text-white text-center px-2 py-1 rounded text-sm">健康危害</div>
                </>
              )}
              {chemical === "CPL" && (
                <>
                  <div className="bg-red-500 text-white text-center px-2 py-1 rounded text-sm">可燃固體</div>
                  <div className="bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm">蒸氣爆炸</div>
                  <div className="bg-green-500 text-white text-center px-2 py-1 rounded text-sm">毒性危害</div>
                </>
              )}
              {chemical === "HMDA" && (
                <>
                  <div className="bg-red-500 text-white text-center px-2 py-1 rounded text-sm">易燃液體</div>
                  <div className="bg-purple-500 text-white text-center px-2 py-1 rounded text-sm">蒸氣爆炸</div>
                  <div className="bg-orange-500 text-white text-center px-2 py-1 rounded text-sm">腐蝕性</div>
                </>
              )}
              {chemical === "Adipic Acid" && (
                <>
                  <div className="bg-yellow-500 text-white text-center px-2 py-1 rounded text-sm">粉塵爆炸</div>
                  <div className="bg-gray-500 text-white text-center px-2 py-1 rounded text-sm">低可燃性</div>
                  <div className="bg-green-500 text-white text-center px-2 py-1 rounded text-sm">刺激性</div>
                </>
              )}
              {chemical === "AN" && (
                <>
                  <div className="bg-red-600 text-white text-center px-2 py-1 rounded text-sm">極度易燃</div>
                  <div className="bg-purple-600 text-white text-center px-2 py-1 rounded text-sm">爆炸危險</div>
                  <div className="bg-orange-600 text-white text-center px-2 py-1 rounded text-sm">高毒性</div>
                </>
              )}
              {chemical === "Propylene" && (
                <>
                  <div className="bg-red-600 text-white text-center px-2 py-1 rounded text-sm">極度易燃</div>
                  <div className="bg-blue-600 text-white text-center px-2 py-1 rounded text-sm">壓縮氣體</div>
                  <div className="bg-yellow-600 text-white text-center px-2 py-1 rounded text-sm">回火風險</div>
                </>
              )}
            </div>
            
            <div className="text-sm text-center">
              {chemical === "PTA" && "對苯二甲酸 - 聚酯纖維主要原料"}
              {chemical === "EG" && "乙二醇 - 聚酯纖維主要原料"}
              {chemical === "CPL" && "己內醯胺 - 尼龍6主要原料"}
              {chemical === "HMDA" && "己二胺 - 尼龍6,6主要原料"}
              {chemical === "Adipic Acid" && "己二酸 - 尼龍6,6主要原料"}
              {chemical === "AN" && "丙烯腈 - 壓克力纖維原料"}
              {chemical === "Propylene" && "丙烯 - 聚丙烯纖維原料"}
            </div>
          </div>
          
          <div className="w-16 h-16 rounded-full flex items-center justify-center border-4" 
               style={{ 
                 borderColor: chemical === "AN" || chemical === "Propylene" ? "#dc2626" : 
                             chemical === "HMDA" || chemical === "CPL" ? "#ef4444" : 
                             chemical === "EG" ? "#f59e0b" : "#22c55e"
               }}>
            <span className="text-xl font-bold" 
                 style={{ 
                   color: chemical === "AN" || chemical === "Propylene" ? "#dc2626" : 
                         chemical === "HMDA" || chemical === "CPL" ? "#ef4444" : 
                         chemical === "EG" ? "#f59e0b" : "#22c55e"
                 }}>
              {chemical === "AN" || chemical === "Propylene" ? "4" : 
               chemical === "HMDA" || chemical === "CPL" ? "3" : 
               chemical === "EG" ? "2" : "1"}
            </span>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p className="text-center">化學原料風險等級從1(低)到4(極高)，應嚴格按照安全規範處理</p>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        <p>*模擬展示僅供教育目的，實際風險應由專業損防工程師評估</p>
      </div>
    </div>
  );
};

export default RiskAnimations;
