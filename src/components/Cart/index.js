import { BackpackIcon } from "@radix-ui/react-icons";

const Cart = () => {
  return (
    <div>
      <div className="bg-red-100 px-4 py-2 rounded-3xl flex items-center gap-3">
        <div>
          <BackpackIcon className="w-4 h-4" />
        </div>
        <div>購物車 •</div>
        <div>0</div>
      </div>
    </div>
  );
};

export default Cart;
//bg-black text-slate-50 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:opacity-80 transition-opacity flex items-flex gap-3
