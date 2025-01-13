'use client';
import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

interface TopFiveStateProps {
  topFiveState: TopFiveState[];
}

const TopFiveState = ({ topFiveState }: TopFiveStateProps) => {
  const data = topFiveState.map((value) => ({
    name: value.name,
    count: value.count,
  }));

  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-md border shadow-md">
      <div className="w-full px-4 pt-4">
        <h2 className="text-left text-lg font-bold">Top 5 States</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%" className="">
        <PieChart>
          <Pie
            dataKey="count"
            startAngle={360}
            endAngle={0}
            data={data}
            fill="#0f0f0f"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="-pt-8 w-full pb-4">
        <p className="text-center text-base font-semibold">WA 100%(50,000)</p>
      </div>
    </div>
  );
};

export default TopFiveState;
