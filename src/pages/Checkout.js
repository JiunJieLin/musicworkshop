import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Advertisement from "@/components/Advertisement";
import ShoppingList from "@/components/ShoppingList";

const Checkout = () => {
  return (
    <main className="min-h-screen mx-auto max-w-[1920px]">
      <Navigation />
      <Breadcrumb />
      <Advertisement />

      {/* 這裡放新增的表單 */}
      <ShoppingList />
    </main>
  );
};

export default Checkout;