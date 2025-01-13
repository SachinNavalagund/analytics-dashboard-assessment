/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

interface TopFiveModelsProps {
  topFiveModels: TopFiveModel[];
}

const colors = ['#000000', '#000000', '#000000', '#000000', '#000000'];

const getPath = (x: any, y: any, width: any, height: any) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const TopFiveModelChart = ({ topFiveModels }: TopFiveModelsProps) => {
  console.log(topFiveModels);
  const data = topFiveModels.map((value) => ({
    name: value.name,
    count: value.count,
  }));
  return (
    <div className="h-[400px] w-full rounded-md border shadow-md">
      <div className="h-full w-full rounded-xl bg-white p-4 shadow-md">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Top 5 Models</h2>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="count"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopFiveModelChart;
