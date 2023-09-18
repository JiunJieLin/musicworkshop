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
