'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuPanelLeft, LuPanelRight } from 'react-icons/lu';
import Menu from './Menu';

const SideBar = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div
      className={`hidden ${expanded ? 'w-[220px]' : 'w-[80px]'} p-4 shadow-md md:block`}
    >
      <div className="flex h-[50px] items-center justify-between">
        <Link href="/" className={`${expanded ? 'block' : 'hidden'}`}>
          <span className="hidden text-xl font-bold text-black hover:text-secondary md:block">
            EV Dash
          </span>
        </Link>
        <button
          className={`${!expanded && 'px-2'}`}
          onClick={() => setExpanded((curr) => !curr)}
        >
          {expanded ? (
            <LuPanelLeft size={24} className="text-icon" />
          ) : (
            <LuPanelRight size={24} className="text-icon" />
          )}
        </button>
      </div>
      <Menu expanded={expanded} />
    </div>
  );
};

export default SideBar;
