'use client';

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SmallBarChart = ({ data }: any) => {
  const chartData = [
    { label: 'BEV', value: data.bev },
    { label: 'PHEV', value: data.phev },
  ];
  return (
    <div className="h-full w-full rounded-xl bg-white px-4 pb-4 pt-2 shadow-md">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Vehicle Type</h1>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={300}
          height={150}
          data={chartData}
          barSize={30}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="label"
            axisLine={false}
            stroke="icon"
            tickLine={false}
          />
          <YAxis axisLine={false} stroke="icon" tickLine={false} />
          <Tooltip
            cursor={{ fill: '#f8f8f8' }}
            contentStyle={{ borderRadius: '10px', borderColor: 'icon' }}
          />
          <Bar
            dataKey="value"
            fill="#050100"
            activeBar={<Rectangle fill="#050100" stroke="#050100" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SmallBarChart;
