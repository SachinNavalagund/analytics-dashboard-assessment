'use client';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface TopFiveMakerDataProps {
  topFiveMakerData: TopFiveMaker[];
}

const TopFiveMakerChart = ({ topFiveMakerData }: TopFiveMakerDataProps) => {
  const data = topFiveMakerData.map((item) => ({
    name: item.name,
    count: item.count,
  }));
  return (
    <div className="h-[400px] w-full rounded-md border shadow-md">
      <div className="h-full w-full rounded-xl bg-white p-4 shadow-md">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Top 5 Makers</h2>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="icon" />
            <YAxis axisLine={false} tickLine={false} stroke="icon" />
            <Tooltip
              cursor={{ fill: '#f8f8f8' }}
              contentStyle={{ borderRadius: '10px', borderColor: 'icon' }}
            />
            <Area
              type="natural"
              dataKey="count"
              stroke="#000000"
              fill="#000000"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopFiveMakerChart;
