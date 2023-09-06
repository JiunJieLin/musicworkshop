import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

const SearchBar = () => {
  return (
    <div className="flex flex-1 max-w-2xl items-center justify-center relative">
      <DrawingPinFilledIcon className="w-4 h-4 text-slate-800 absolute left-3" />
      <input
        className="bg-gray-100 w-full py-3.5 outline-none
        pr-8 pl-10 text-lg border-b-2 transition-all 
        focus:outline-none active:outline-none
       focus:border-b-slate-800 placeholder:text-sm rounded-t-sm"
        placeholder="請輸入外送地址"
      />
    </div>
  );
};

export default SearchBar;
