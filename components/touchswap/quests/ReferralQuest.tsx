import React from "react";
import { SpeakerIcon } from "../../assets/SpeakerIcon";

type ReferralQuestsList = {
  count: number;
  reward: number;
  claimed?: boolean;
};

export const referralQuestsLists: ReferralQuestsList[] = [
  {
    count: 1,
    reward: 1200,
    claimed: false,
  },
  {
    count: 5,
    reward: 5000,
    claimed: false,
  },
  {
    count: 10,
    reward: 15000,
    claimed: false,
  },
  {
    count: 25,
    reward: 50000,
    claimed: false,
  },
  {
    count: 100,
    reward: 100000,
    claimed: false,
  },
  {
    count: 200,
    reward: 150000,
    claimed: false,
  },
];

export const ReferralQuests = () => {
  return (
    <div className="grid gap-2">
      {referralQuestsLists.map(({ count, reward }, index) => {
        return (
          <div
            className="bg-[#293641] py-3 px-6 rounded-lg h-full flex items-center justify-between"
            key={index}
          >
            <div className="flex items-center">
              <SpeakerIcon active />
              <div className="ml-3">
                <h3 className="text-[0.8rem] font-[500] leading-[1.8] text-[#AFAFAF]">
                  {count} Invite
                </h3>
                <div className="text-[0.75rem] font-medium">1200</div>
              </div>
            </div>
            <button className="text-sm bg-[#A7A7A7] text-black py-2 px-2 rounded-lg font-medium">
              Claim
            </button>
          </div>
        );
      })}
    </div>
  );
};