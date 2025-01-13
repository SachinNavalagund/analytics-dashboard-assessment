'use client';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import { MdGirl } from 'react-icons/md';
import { MdBoy } from 'react-icons/md';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#fbcfe8',
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#d4f6ff',
  },
];

const CountChart = () => {
  return (
    <div className="h-full w-full rounded-xl bg-white p-4 shadow-md">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
      </div>

      {/* Chart */}
      <div className="relative h-[75%] w-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
          <span className="relative mr-7">
            <MdBoy size={90} fill="#d4f6ff" />
          </span>
          <span className="absolute ml-7">
            <MdGirl size={90} fill="#fbcfe8" />
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 rounded-full bg-skyL" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 rounded-full bg-pinkL" />
          <h1 className="font-bold">1,034</h1>
          <h2 className="text-xs text-gray-300">Boys (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
