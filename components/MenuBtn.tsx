import React from "react";
import { Bubble } from "./assets/Bubble";

type MenuLink = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  activeIcon: React.ReactNode;
  isActive: boolean;
  onClick:()=>void;
};

export const MenuBtn: React.FC<MenuLink> = ({ label, icon, isActive, activeIcon, onClick }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick} >
      <div className="relative">
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          {isActive ? activeIcon : icon}
        </div>
        <Bubble isActive={isActive} />
      </div>

      <div
        className={`  ${
          isActive ? "text-white purple-gradient" : "text-[#AFAFAF] bg-[#262433]"
        }     " py-[2px] px-2 rounded-full mt-[-0.8rem] text-[0.8rem] border border-black font-[500] z-10 relative"`}
        style={{
          boxShadow: `0.88px 2.63px 1.32px 0px #FFFFFF47 inset
            `,
        }}
      >
        {label}
      </div>
    </div>
  );
};
