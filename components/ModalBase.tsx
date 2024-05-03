import React from "react";
import { CloseIcon } from "./assets/CloseIcon";
import Image from "next/image";

type ModalProps = {
  onClose?: () => void;
  title: string;
  text: string;
  children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  title,
  text,
  onClose,
  children,
}) => {
  return (
    <div className="fixed z-[20]  overflow-y-scroll bottom-0 min-h-[65%] w-full bg-[#18131FE5] px-3 py-6 text-center flex flex-col items-center justify-between  left-0">
      <div className="flex flex-col items-center">
        <Image
          src={"/img/extratap.svg"}
          alt="diamond"
          width={240}
          height={240}
        />
        <h3 className="text-2xl mb-2 font-semibold">{title}</h3>
        <p className="text-[#B0AEB5] text-[13px] pb-3">{text}</p>
        <div className="font-bold my-3">Free</div>
        <div className="text-[#B0AEB5] text-[0.8rem]">3/3 remaining</div>

        <div>{children}</div>
      </div>

      <button className="btn bg-white w-full text-black py-4 font-bold rounded-lg align-baseline">
        Get
      </button>
      <button
        className="absolute top-3 right-3 py-2 px-4 mt-3"
        onClick={onClose}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
