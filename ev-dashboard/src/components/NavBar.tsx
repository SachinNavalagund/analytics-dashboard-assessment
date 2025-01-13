'use client';
import React from 'react';
import { GoSearch } from 'react-icons/go';
import { RxDashboard, RxHamburgerMenu } from 'react-icons/rx';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

import { LuDatabase } from 'react-icons/lu';
import Link from 'next/link';
import { IoCarSportOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import AvatarImage from '@/../../public/profile.jpg';

const NavBar = () => {
  const pathName = usePathname();

  return (
    <div className="mx-2 flex h-[100px] items-center justify-between border-b py-3 lg:mx-4 lg:pl-4">
      <label
        htmlFor=""
        className="flex w-[60%] items-center gap-2 rounded-full border bg-white p-2 pl-4 shadow-md lg:w-[40%] lg:pl-6"
      >
        <GoSearch size={22} className="text-icon" />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-0.5 outline-none"
        />
      </label>
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col">
            <span className="text-right font-semibold">Jhon</span>
            <span className="text-sm font-semibold text-icon">
              JohnWick@gmail.com
            </span>
          </div>
          <Image
            width={50}
            height={50}
            className="rounded-full object-cover"
            alt="Profile"
            src={AvatarImage}
          />
        </div>
      </div>

      {/* Mobile nav */}
      <Sheet>
        <SheetTrigger asChild className="block hover:cursor-pointer md:hidden">
          <RxHamburgerMenu size={22} className="text-icon" />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            <div className="-mt-2">
              <h2 className="text-2xl font-bold text-secondary">EV Dash</h2>
            </div>
          </SheetTitle>
          <SheetDescription className="mt-6 flex flex-col gap-4">
            <Link
              href="/"
              className={`${pathName === '/' ? 'rounded-md bg-secondary' : 'bg-primary'} flex items-center gap-4 px-4 py-2`}
            >
              <button className="flex items-center gap-4">
                <RxDashboard size={21} className="block text-icon" />
                <span
                  className={`${pathName === '/' ? 'text-primary' : 'text-secondary'} text-base font-semibold lg:block`}
                >
                  Dashboard
                </span>
              </button>
            </Link>

            <Link
              href="/table-data"
              className={`${pathName === '/table-data' ? 'rounded-md bg-secondary' : 'bg-primary'} flex items-center gap-4 px-4 py-2`}
            >
              <button className="flex items-center gap-4">
                <LuDatabase size={20} className="block text-icon" />
                <span
                  className={`${pathName === '/table-data' ? 'text-primary' : 'text-secondary'} text-base font-semibold lg:block`}
                >
                  Data Set
                </span>
              </button>
            </Link>

            <Link
              href="/maker"
              className={`${pathName === '/maker' ? 'rounded-md bg-secondary' : 'bg-primary'} flex items-center justify-between gap-4 px-4 py-2`}
            >
              <button className="flex items-center gap-4">
                <IoCarSportOutline size={22} className="block text-icon" />
                <span
                  className={`${pathName === '/maker' ? 'text-primary' : 'text-secondary'} text-base font-semibold`}
                >
                  Maker
                </span>
              </button>
            </Link>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBar;
