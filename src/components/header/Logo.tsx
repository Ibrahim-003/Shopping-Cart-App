import { AiTwotoneShop } from "react-icons/ai";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 ">
        <AiTwotoneShop className="text-primary text-2xl" />
        <span className="text-xl font-bold text-indigo-400">GeneralStore</span>
    </div>
  );
}
