const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// 轉換所有 TSX 文件
const srcDir = path.join(__dirname, "src");
const outDir = path.join(__dirname, "js");

// 確保目標目錄存在
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 讀取所有 TSX 文件
const files = fs.readdirSync(srcDir)
  .filter(file => file.endsWith(".tsx"));

// 轉換每個文件
files.forEach(file => {
  const srcFile = path.join(srcDir, file);
  const outFile = path.join(outDir, file.replace(".tsx", ".js"));
  
  try {
    console.log(`轉換 ${file}...`);
    // 使用 Babel 轉換
    execSync(`npx babel ${srcFile} --out-file ${outFile} --extensions ".tsx"`);
    console.log(`轉換成功: ${outFile}`);
    
    // 修改輸出文件，添加兼容瀏覽器的語法
    let content = fs.readFileSync(outFile, "utf-8");
    
    // 替換 import 語句為全局變量引用
    content = content.replace(/import React.*/g, "");
    content = content.replace(/import {.*} from [\'"]react[\'"];?/g, "");
    content = content.replace(/import {.*} from [\'"]recharts[\'"];?/g, "");
    
    // 獲取組件名稱 (從文件名轉換為駝峰命名)
    const componentName = file.replace(".tsx", "")
      .split("-")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    
    // 添加全局變量引用和導出
    content = `// 從 ${file} 轉換
const { useState, useEffect } = React;
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } = Recharts;

${content}

// 掛載到全局
window.${componentName} = ${componentName};
`;
    
    fs.writeFileSync(outFile, content);
    console.log(`優化完成: ${outFile}`);
    
  } catch (error) {
    console.error(`轉換 ${file} 時出錯:`, error);
  }
});

console.log("所有文件轉換完成！");

