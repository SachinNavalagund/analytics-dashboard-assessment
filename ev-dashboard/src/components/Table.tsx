'use client';
import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  SortingState,
} from '@tanstack/react-table';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { LuSearch } from 'react-icons/lu';

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

const Table = <TData extends object>({ data, columns }: TableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <div className={`relative w-full p-4`}>
        {/* Search */}
        <div className="bg-light dark:bg-dark mb-4 mt-2 flex w-full max-w-sm items-center gap-4 rounded-2xl border border-slate-300 p-2 shadow-md dark:border-slate-900">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="Search by any filed"
            className="input bg-light dark:bg-dark w-full px-4 outline-none"
          />
          <LuSearch size={22} />
        </div>

        {/* Table Data */}
        <div className="scroll-thin w-full overflow-auto">
          <div className="w-[1750px] overflow-auto overflow-x-auto rounded-md border">
            <table className="w-full">
              <thead className="">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr className="bg-white p-4" key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        onClick={header.column.getToggleSortingHandler()}
                        className="h-[65px] w-[175px] border p-4 hover:cursor-pointer"
                        key={header.id}
                      >
                        <div className="flex items-center justify-between">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {header.column.getIsSorted() === 'asc' && (
                            <BiSolidUpArrow />
                          )}
                          {header.column.getIsSorted() === 'desc' && (
                            <BiSolidDownArrow />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody className="">
                {table.getRowModel().rows.map((row) => (
                  <tr
                    className="dark:odd:bg-dark odd:bg-light bg-[#f3f3f3] even:bg-white dark:even:bg-black"
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td className="px-2 py-4" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mb-8 flex w-full items-center justify-center pb-10 pt-4">
          <div className="mb-2 flex gap-4 rounded-full border px-4 py-2 shadow-md">
            <button
              className="rounded-xl p-1 transition delay-75 ease-in hover:cursor-pointer hover:border hover:border-slate-400"
              onClick={() => table.setPageIndex(0)}
              disabled={table.getState().pagination.pageIndex === 0}
            >
              <HiOutlineChevronDoubleLeft
                size={20}
                className="hover:text-main transition delay-75 ease-in hover:scale-110"
              />
            </button>
            <button
              disabled={!table.getCanPreviousPage()}
              className={`rounded-xl p-1 transition delay-75 ease-in hover:cursor-pointer hover:border hover:border-slate-400`}
              onClick={() => table.previousPage()}
            >
              <MdOutlineArrowBackIos className="hover:text-main transition delay-75 ease-in hover:scale-110" />
            </button>

            <p className="rounded-full bg-[#f3f3f3] px-4 py-1 text-base">
              {' '}
              Page{' '}
              <span className="font-semibold">
                {table.getState().pagination.pageIndex + 1}
              </span>{' '}
              of <span className="font-semibold">{table.getPageCount()}</span>
            </p>

            <button
              className="rounded-xl p-1 transition delay-75 ease-in hover:cursor-pointer hover:border hover:border-slate-400"
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              <MdOutlineArrowForwardIos className="hover:text-main transition delay-75 ease-in hover:scale-110" />
            </button>
            <button
              className="rounded-xl p-1 transition delay-75 ease-in hover:cursor-pointer hover:border hover:border-slate-400"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={
                table.getState().pagination.pageIndex ===
                table.getPageCount() - 1
              }
            >
              <HiOutlineChevronDoubleRight
                size={20}
                className="hover:text-main transition delay-75 ease-in hover:scale-110"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
