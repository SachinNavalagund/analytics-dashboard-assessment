'use client';

import React from 'react';
import { TopFiveCountyProps } from './TopFiveCounty';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const TopFiveCountyChart = ({ topFiveCounty }: TopFiveCountyProps) => {
  const formattedData = topFiveCounty.map((data) => ({
    name: data.name,
    count: data.count,
  }));

  console.log(formattedData);

  return (
    <div className="h-full w-full rounded-xl bg-white p-4 shadow-md">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Top 5 County</h2>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          barSize={40}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" stroke="icon" />
          <YAxis axisLine={false} stroke="icon" />
          <Tooltip
            cursor={{ fill: '#f8f8f8' }}
            contentStyle={{ borderRadius: '10px', borderColor: 'icon' }}
          />
          <Bar
            dataKey="count"
            fill="#050100"
            activeBar={<Rectangle fill="#555555" stroke="#050100" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopFiveCountyChart;
