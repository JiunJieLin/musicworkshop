const MenuCategory = () => {
  const breakfastItems = ["吉他", "長笛", "豎笛", "麥克風", "移調夾", "背帶"];
  return (
    <div className="max-h-screen overflow-auto no-scrollbar">
      <div className="pb-20 pt-">
        <div className="mb-1 underline font-bold text-stone-950">商品分類</div>
        {breakfastItems.map((item, index) => {
          return (
            <div
              key={index}
              className="text-gray-850 py-2 cursor-pointer text-slate-500 hover:text-slate-900 transition-opacity"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
