import MenuCategory from "@/components/MenuCategory";
import CategoryItems from "@/components/CategoryItems";
import { useEffect, useState } from "react";
import mockData from "@/data/mockData.json";

const ShopMenu = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const refinedData = mockData
      .map((item) => item.category)
      ?.filter((item, index, array) => array.indexOf(item) === index);
    setCategory(refinedData);

    const refinedItems = mockData.reduce((acc, cur) => {
      const category = cur.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(cur);
      return acc;
    }, {});
    setItems(refinedItems);
  }, []);

  const handleOnMenuCategoryClick = (index) => {
    setActiveCategory(index);
  };

  const activeCategoryLabel = category?.[activeCategory];

  return (
    <div className="flex items-start relative min-h-screen px-14 pt-8">
      <div className="w-[320px] pr-5 sticky top-0 left-0">
        <MenuCategory
          data={category}
          active={activeCategory}
          onClick={handleOnMenuCategoryClick}
        />
      </div>
      <div className="flex-1">
        <CategoryItems data={items} active={activeCategory} />
      </div>
    </div>
  );
};

export default ShopMenu;
