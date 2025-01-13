'use server';
import { fetchMakerData } from '@/utils/maker';
import Maker from '@/components/Maker';
import React from 'react';

const MakerPage = async () => {
  const countsByMake = await fetchMakerData();

  return (
    <div className="mx-1 mt-2 h-auto p-2 lg:mx-4 lg:pl-4">
      <h1 className="text-2xl font-bold text-secondary">Maker</h1>

      <div className="mt-2">
        <h2 className="text-base font-semibold text-secondary">
          All Maker list with counts
        </h2>
        <Maker countsByMake={countsByMake} />

      </div>
    </div>
  );
};

export default MakerPage;
