'use client';
import React from 'react';
import { BsEvStation } from 'react-icons/bs';
import { PiPlugs } from 'react-icons/pi';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VehicleTypePieChart = ({ data }: any) => {
  const chartData = [
    {
      label: 'Total',
      value: 50000,
      fill: 'white',
    },
    { label: 'BEV', value: data.bev, fill: '#000000' },
    { label: 'PHEV', value: data.phev, fill: '#3b3b3b' },
  ];

  return (
    <div className="flex h-auto w-full flex-col rounded-md border shadow-md">
      <div className="w-full px-4 pt-4">
        <h2 className="text-left text-lg font-bold">Vehicle Type</h2>
      </div>

      <ResponsiveContainer className="">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={chartData}
        >
          <RadialBar background dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="flex w-full flex-col items-center gap-2 pb-4">
        <div className="flex items-center justify-center gap-2">
          <BsEvStation size={20} fill="#000000" />
          <span className="font-bold text-[#000000]">BEV {data.bev}</span>
        </div>
        <div className="flex items-center justify-center">
          <PiPlugs size={20} fill="#3b3b3b" />
          <span className="font-bold text-[#3b3b3b]">PHEV {data.phev}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleTypePieChart;
