/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Table from './Table';

interface VehicleRecordProps {
  data: VehicleRecord[];
}

const FullTable = ({ data }: VehicleRecordProps) => {
  const columns = [
    {
      header: 'VIN (1-10)',
      accessorKey: 'VIN (1-10)',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'County',
      accessorKey: 'County',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'City',
      accessorKey: 'City',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'State',
      accessorKey: 'State',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'Postal Code',
      accessorKey: 'Postal Code',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'Model Year',
      accessorKey: 'Model Year',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'Make',
      accessorKey: 'Make',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'Model',
      accessorKey: 'Model',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'DOL Vehicle ID',
      accessorKey: 'DOL Vehicle ID',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'Electric Vehicle Type',
      accessorKey: 'Electric Vehicle Type',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
    {
      header: 'Clean Alternative Fuel Vehicle (CAFV) Eligibility',
      accessorKey: 'Clean Alternative Fuel Vehicle (CAFV) Eligibility',
      cell: (info: any) => (
        <div key={info}>
          <span className="text-sm font-semibold">{info.getValue()}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default FullTable;
