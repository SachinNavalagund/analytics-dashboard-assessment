'use server';

import Dashboard from '@/components/Dashboard';
import TopFiveCounty from '@/components/TopFiveCounty';
import TopFiveMakerChart from '@/components/TopFiveMakerChart';
import TopFiveModelChart from '@/components/TopFiveModelChart';
import TopFiveState from '@/components/TopFiveState';
import VehicleTypePieChart from '@/components/VehicleTypePieChart';
import {
  fetchMakerData,
  fetchVehicleTypeCounts,
  getTopFiveCounties,
  getTopFiveModels,
  getTopFiveState,
} from '@/utils/maker';
import React from 'react';

const HomePage = async () => {
  const top5County = await getTopFiveCounties();
  const top5States = await getTopFiveState();
  const top5Models: TopFiveModel[] = await getTopFiveModels();

  const makerData = await fetchMakerData();
  const sortedMakerData = Object.entries(makerData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const top5MakerData: TopFiveMaker[] = sortedMakerData.map(
    ([name, count]) => ({
      name,
      count,
    }),
  );

  const vehicleType = await fetchVehicleTypeCounts();
  const bevCount = vehicleType['Battery Electric Vehicle (BEV)'];
  const phevCount = vehicleType['Plug-in Hybrid Electric Vehicle (PHEV)'];

  return (
    <div className="mx-1 mt-2 h-auto p-2 lg:mx-4 lg:pl-4">
      <h1 className="text-2xl font-bold text-secondary">Dashboard</h1>

      <div className="mt-4 flex h-[90%] flex-col gap-4">
        <Dashboard />
        <div className="grid h-[400px] w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <TopFiveState topFiveState={top5States} />
          <VehicleTypePieChart data={{ bev: bevCount, phev: phevCount }} />
        </div>

        <TopFiveCounty topFiveCounty={top5County} />
        <TopFiveMakerChart topFiveMakerData={top5MakerData} />
        <TopFiveModelChart topFiveModels={top5Models} />
      </div>
    </div>
  );
};

export default HomePage;
