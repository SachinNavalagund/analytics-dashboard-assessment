import React, { ReactNode } from 'react';
import './globals.css';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="bg-primary">
        <div className="mx-auto flex h-screen max-w-screen-2xl">
          {/* Left */}
          <SideBar />

          {/* Right */}
          <div className="no-scrollbar flex w-[86%] flex-1 flex-col overflow-scroll md:w-[92%] lg:w-[84%] xl:w-[86%]">
            <NavBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default DashboardLayout;
