"use client"

// !! Types
import { HeaderType } from "./index.types";

const Header = ({ start, end }: HeaderType) => {
  return (
    <div className="grid grid-cols-2 p-[12px] gap-[8px]">
      <div className="flex flex-col items-center w-full rounded-8 border border-gray-900 px-[12px] py-[6px]">
        <span className="text-sm text-gray-200">Start Date</span>
        <span className="text-sm text-white">{start}</span>
      </div>
      <div className="flex flex-col items-center w-full rounded-8 border border-gray-900 px-[12px] py-[6px]">
        <span className="text-sm text-gray-200">End Date</span>
        <span className="text-sm text-white">{end}</span>
      </div>
    </div>
  );
};

export default Header;
