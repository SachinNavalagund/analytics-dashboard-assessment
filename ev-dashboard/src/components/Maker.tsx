import React from 'react';

interface PropType {
  countsByMake: Record<string, number>;
}

const Maker = ({ countsByMake }: PropType) => {
  return (
    <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {Object.entries(countsByMake).map(([make, count]) => (
        <div
          key={make}
          className="flex flex-col gap-4 rounded-md border p-4 shadow-lg hover:cursor-pointer hover:bg-slate-100 hover:text-zinc-400"
        >
          <div className="flex h-[50px] items-center justify-center">
            <span className="text-lg font-bold text-secondary md:text-xl">
              {make}
            </span>
          </div>
          <span className="text-right font-semibold">Count : {count}</span>
        </div>
      ))}
    </div>
  );
};

export default Maker;
