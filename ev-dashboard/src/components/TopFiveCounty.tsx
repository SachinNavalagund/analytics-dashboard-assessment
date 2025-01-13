import React from 'react';
import TopFiveCountyChart from './TopFiveCountyChart';

export interface TopFiveCountyProps {
  topFiveCounty: TopFiveCounty[];
}

const TopFiveCounty = ({ topFiveCounty }: TopFiveCountyProps) => {
  return (
    <div className="h-[400px] w-full rounded-md border shadow-md">
      <TopFiveCountyChart topFiveCounty={topFiveCounty} />
    </div>
  );
};

export default TopFiveCounty;
