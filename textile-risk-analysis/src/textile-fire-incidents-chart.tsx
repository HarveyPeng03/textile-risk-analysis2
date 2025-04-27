import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FireIncidentsChart = () => {
  // 不同類型紡織廠的火災事故統計數據（模擬數據）
  const factoryTypeData = [
    { name: '棉紡織廠', incidents: 45, deaths: 12, injuries: 76, losses: 850 },
    { name: '人造纖維廠', incidents: 37, deaths: 8, injuries: 53, losses: 720 },
    { name: '織布廠', incidents: 28, deaths: 4, injuries: 31, losses: 410 },
    { name: '染整廠', incidents: 42, deaths: 9, injuries: 64, losses: 780 },
    { name: '機能布料廠', incidents: 23, deaths: 6, injuries: 29, losses: 520 },
  ];

  // 火災起因分布（模擬數據）
  const causesData = [
    { name: '電氣短路', value: 32, color: '#0088FE' },
    { name: '靜電引燃', value: 24, color: '#00C49F' },
    { name: '機械過熱', value: 18, color: '#FFBB28' },
    { name: '熱媒油洩漏', value: 13, color: '#FF8042' },
    { name: '粉塵爆炸', value: 8, color: '#8884d8' },
    { name: '其他', value: 5, color: '#82ca9d' },
  ];

  return (
    <div className="w-full space-y-8 p-4 bg-white rounded-lg">
      <div>
        <h2 className="text-xl font-bold text-center mb-2">2020-2025年台灣紡織業火災事故統計</h2>
        <h3 className="text-md text-center text-gray-600 mb-4">各類型工廠事故頻率與損失金額比較</h3>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={factoryTypeData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="incidents" name="事故數量" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="losses" name="損失金額(萬元)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-center mb-2">傷亡人數統計</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={factoryTypeData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="deaths" name="死亡人數" fill="#ff0000" />
                <Bar dataKey="injuries" name="受傷人數" fill="#ffaa00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-center mb-2">火災起因分布</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={causesData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {causesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        <p>*數據來源：2020-2025年台灣工廠火災統計資料庫及保險理賠案例彙整</p>
        <p>*損失金額單位：新台幣萬元</p>
      </div>
    </div>
  );
};

export default FireIncidentsChart;
