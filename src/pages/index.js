import Advertisement from "@/components/Advertisement";
import Breadcrumb from "@/components/Breadcrumb";
import Navigation from "@/components/Navigation";
import Shopmenu from "@/components/Shopmenu";
import ExtraAction from "@/components/ExtraAction";

import { ProductProvider } from "@data/context";

const Home = () => {
  const [cart, setCart] = useState({});
  return (
    <ProductProvider value={value}>
      <main className="min-h-screen mx-auto max-w-[1920px]">
        <Navigation />
        <Advertisement />
        <Breadcrumb />
        <ExtraAction />
        <Shopmenu />
      </main>
    </ProductProvider>
  );
};
export default Home;
