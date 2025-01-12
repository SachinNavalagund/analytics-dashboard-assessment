'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoCarSportOutline } from 'react-icons/io5';
import { LuDatabase } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';

interface PropType {
  expanded: boolean;
}

const Menu = ({ expanded }: PropType) => {
  const pathName = usePathname();

  return (
    <div className="mt-4 flex flex-1 flex-col gap-2">
      <div
        className={`${pathName === '/' ? 'rounded-md bg-black' : 'bg-primary'} p-2 hover:rounded-md hover:bg-slate-100`}
      >
        <Link href="/" className="flex items-center gap-4">
          <div
            className={`flex items-center gap-4 ${expanded ? 'pl-4' : 'px-1'}`}
          >
            <RxDashboard size={21} className="block text-icon" />
            <span
              className={`${pathName === '/' ? 'text-primary hover:text-secondary' : 'text-secondary'} ${expanded ? 'block' : 'hidden'} text-base font-semibold`}
            >
              Dashboard
            </span>
          </div>
        </Link>
      </div>

      <div
        className={`${pathName === '/table-data' ? 'rounded-md bg-black' : 'bg-primary'} p-2 hover:rounded-md hover:bg-slate-100`}
      >
        <Link href="/table-data" className="flex items-center gap-4">
          <div
            className={`flex items-center gap-4 ${expanded ? 'pl-4' : 'px-1'}`}
          >
            <LuDatabase size={20} className="block text-icon" />
            <span
              className={`${pathName === '/table-data' ? 'text-primary hover:text-secondary' : 'text-secondary'} ${expanded ? 'block' : 'hidden'} text-base font-semibold`}
            >
              Data Set
            </span>
          </div>
        </Link>
      </div>

      <div
        className={`${pathName === '/maker' ? 'rounded-md bg-black' : 'bg-primary'} p-2 hover:rounded-md hover:bg-slate-100`}
      >
        <Link href="/maker" className="flex items-center gap-4">
          <div
            className={`flex items-center gap-4 ${expanded ? 'pl-4' : 'px-1'}`}
          >
            <IoCarSportOutline size={22} className="block text-icon" />
            <span
              className={`${expanded ? 'block' : 'hidden'} ${pathName === '/maker' ? 'text-primary hover:text-secondary' : 'text-secondary'} text-base font-semibold`}
            >
              Maker
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
