'use server';
import React from 'react';

import { getFullData } from '@/utils/maker';
import FullTable from './FullTable';

const TableData = async () => {
  const data = await getFullData();

  return <FullTable data={data} />;
};

export default TableData;
