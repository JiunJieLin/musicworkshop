import { LockOpen2Icon } from "@radix-ui/react-icons";

const ExtraAction = () => {
  return (
    <div className="px-12 flex gap-4">
      <div className="bg-red-100 text-gray-850 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:bg-slate-200 transition-opacity flex items-center gap-1">
        品牌故事
      </div>
      <div className="bg-red-100 text-gray-850 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:bg-slate-200 transition-opacity flex items-center gap-1">
        <LockOpen2Icon className="w-4 h-4" />
        常見FAQ
      </div>
    </div>
  );
};

export default ExtraAction;
