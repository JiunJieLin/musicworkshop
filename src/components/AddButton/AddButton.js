import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import cx from "classnames";

const AddButton = () => {
  const [count, setCount] = useState(0);
  const isAdded = count > 0;
  const handleAddOnClick = (event) => {
    event.stopPropagation();
    setCount((prev) => prev + 1);
    console.log("add item to cart", count);
  };
  const handleRemoveOnClick = (event) => {
    event.stopPropagation();
    setCount((prev) => prev - 1);
    console.log("remove item to cart", count - 1);
  };
  return (
    <div
      className={cx(
        "absolute top-2 right-2 w-8 h-8 bg-black hover:opacity-75",
        "text-white flex items-center justify-center rounded-full transition-all",
        { "w-auto justify-between px-2": isAdded }
      )}
    >
      {isAdded && (
        <>
          <TrashIcon onClick={handleRemoveOnClick} />
          <div className="text-sm px-2">{count}</div>
        </>
      )}
      <PlusIcon onClick={handleAddOnClick} />
    </div>
  );
};

export default AddButton;
