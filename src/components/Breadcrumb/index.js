import { ChevronRightIcon } from "@radix-ui/react-icons";

const Breadcrumb = () => {
  return (
    <div className="flex py-4 px-10 text-sm text-stone-400">
      <div className="flex items-center mr-2">
        首頁
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">
        產品介紹
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">樂器及配件</div>
    </div>
  );
};
export default Breadcrumb;
