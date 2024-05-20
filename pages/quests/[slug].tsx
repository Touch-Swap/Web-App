import { OpenQuestDetailScreen } from "@/components/screens/OpenQuestDetails";

type Task = {
  title: string;
  completed: boolean;
};

type QuestList = {
  title: string;
  desc: string;
  tasks: Task[];
};

export const connectQuestsLists: QuestList = {
  title: "Wallet Connect Fun",
  desc: "Connect Touchswap to your solana wallet, be careful! Once connected, any rewards would be sent to the connected wallet.",
  tasks: [
    {
      title: "Connect Wallet",
      completed: false,
    },
  ],
};

export default function QuestDetails() {
  return <OpenQuestDetailScreen {...connectQuestsLists} />;
}
