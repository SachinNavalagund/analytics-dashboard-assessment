'use server';

import TableData from '@/components/TableData';
import React from 'react';

const TableDataPage = async () => {
  return (
    <div className="mx-1 mt-2 h-auto p-2 lg:mx-4 lg:pl-4">
      <h1 className="text-2xl font-bold text-secondary">Date Set</h1>

      <div className="mt-4 h-[90%] rounded-md border shadow-lg">
        <TableData />
      </div>
    </div>
  );
};

export default TableDataPage;
