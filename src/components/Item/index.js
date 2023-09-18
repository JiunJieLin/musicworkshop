import AddButton from "../AddButton/AddButton";
import { useContext } from "react";
import { ProductContext } from "@data/context";

const Item = ({ data }) => {
  const { cart, setCart } = useContext(ProductContext);
  const handleCardOnClick = (e) => {
    console.log("card clicked");
  };

  const handleOnAdd = (e) => {
    e.stopPropagation();
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[data.id]) {
        newCart[data.id] += 1;
      } else {
        newCart[data.id] = 1;
      }
      return newCart;
    });
  };
  const handleOnRemove = (e) => {
    e.stopPropagation();
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[data.id]) {
        newCart[data.id] -= 1;
      }
      return newCart;
    });
  };
  const cartCount = cart[data.id] || 0;
  return (
    <div
      onClick={handleCardOnClick}
      className="mb-1 p-4 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="aspect-video overflow-hidden flex items-center relative">
        <img src={data.image} alt="" />
        <AddButton
          count={cartCount}
          onAdd={handleOnAdd}
          onRemove={handleOnRemove}
        />
      </div>
      <div className="py-2 text-stone-950">
        <div>{data.title}</div>
        <div className="text-sm opacity-70">${data.price}</div>
      </div>
    </div>
  );
};

export default Item;
