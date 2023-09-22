import Item from "@/components/Item";

const CategoryItems = () => {
  const breakfastItems = [
    {
      id: 1,
      image: "items/g1.jpg",
      title: "吉他1",
      price: 13000,
      category: "吉他",
    },
    {
      id: 2,
      image: "items/g2.png",
      title: "吉他２",
      price: 14000,
      category: "吉他",
    },
    {
      id: 3,
      image: "items/flute-tomasi.jpg",
      title: "長笛1",
      price: 15000,
      category: "長笛",
    },
    {
      id: 4,
      image: "items/flute-mur.jpg",
      title: "長笛2",
      price: 13000,
      category: "長笛",
    },
    {
      id: 5,
      image: "items/flute-tomasi.jpg",
      title: "長笛3",
      price: 25000,
      category: "長笛",
    },
    {
      id: 6,
      image: "items/cl-buffet.jpg",
      title: "豎笛1",
      price: 60000,
      category: "豎笛",
    },
    {
      id: 7,
      image: "items/mic1.png",
      title: "麥克風１",
      price: 100,
      category: "麥克風",
    },
    {
      id: 8,
      image: "items/mic2.png",
      title: "麥克風2",
      price: 300,
      category: "麥克風",
    },
    {
      id: 9,
      image: "items/c1.jpg",
      title: "移調夾1",
      price: 49,
      category: "移調夾",
    },
    {
      id: 10,
      image: "items/c2.jpg",
      title: "移調夾2",
      price: 50,
      category: "移調夾",
    },
    {
      id: 11,
      image: "items/b1.jpg",
      title: "背帶１",
      price: 100,
      category: "背帶",
    },
    {
      id: 12,
      image: "items/b2.png",
      title: "背帶２",
      price: 200,
      category: "背帶",
    },
  ];
  /*[
    {
      image: "items/g1.jpg",
      title: "吉他1",
      price: 13000,
    },
    {
      image: "items/g2.png",
      title: "吉他２",
      price: 14000,
    },
    {
      image: "items/flute-tomasi.jpg",
      title: "長笛1",
      price: 15000,
    },
    {
      image: "items/flute-mur.jpg",
      title: "長笛2",
      price: 13000,
    },
    {
      image: "items/flute-tomasi.jpg",
      title: "長笛3",
      price: 25000,
    },
    {
      image: "items/cl-buffet.jpg",
      title: "豎笛1",
      price: 60000,
    },
    {
      image: "items/mic1.png",
      title: "麥克風１",
      price: 100,
    },
    {
      image: "items/mic2.png",
      title: "麥克風2",
      price: 300,
    },
    {
      image: "items/c1.jpg",
      title: "移調夾1",
      price: 49,
    },
    {
      image: "items/c2.jpg",
      title: "移調夾2",
      price: 50,
    },
    {
      image: "items/b1.jpg",
      title: "背帶１",
      price: 100,
    },
    {
      image: "items/b2.png",
      title: "背帶２",
      price: 200,
    },
  ];
*/
  return (
    <div className="grid grid-cols-4">
      {breakfastItems.map((item, index) => (
        <Item data={item} key={`${item.title}-${index}`} />
      ))}
    </div>
  );
};

export default CategoryItems;
