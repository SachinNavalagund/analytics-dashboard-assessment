'use server';

import Data from '../../../data-to-visualize/data.json';
import { NextRequest, NextResponse } from 'next/server';
const typedData: VehicleRecord[] = Data as VehicleRecord[];
interface PaginatedResponse {
  data: typeof Data;
  total: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function handler(req: NextRequest, res: NextResponse) {
  // Destructure and handle query params with default values
  const page = req.nextUrl.searchParams.get('page') || '1';
  const pageSize = req.nextUrl.searchParams.get('pageSize') || '100';

  // Convert to integers for pagination
  const pageNum = parseInt(page, 10);
  const pageSizeNum = parseInt(pageSize, 10);

  // Calculate the start and end indices for pagination
  const startIndex = (pageNum - 1) * pageSizeNum;
  const endIndex = startIndex + pageSizeNum;

  // Slice the data based on pagination
  const paginatedData = typedData.slice(startIndex, endIndex);

  // Prepare the response
  const response: PaginatedResponse = {
    data: paginatedData,
    total: typedData.length,
  };

  return NextResponse.json(response, { status: 200 });
}
