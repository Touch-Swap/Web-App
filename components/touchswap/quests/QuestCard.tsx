import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Balance } from "../../Balance";
import { ArrowRight } from "@/components/assets/ArrowRight";

type QuestCardProps = {
  title: string;
  icon?: React.ReactNode;
  link: string;
};

export const QuestCard: React.FC<QuestCardProps> = ({ title, link }) => {
  return (
    <Link href={link} className="bg-[#293641] py-3 px-4 rounded-lg h-full flex items-center justify-between">
      <div className="flex items-center">
        <Image src={"/img/task-icon.svg"} width={25} height={26} alt="Task Icon" />
        <div className="ml-3">
          <h3 className="text-[0.8rem] font-[500] leading-[1.8] text-[#AFAFAF]">{title}</h3>
          <Balance size="sm" count={120000} />
        </div>
      </div>

      <div>
        <ArrowRight />
      </div>
    </Link>
  );
};
