import Advertisement from "@/components/Advertisement";
import Breadcrumb from "@/components/Breadcrumb";
import Navigation from "@/components/Navigation";
import Shopmenu from "@/components/Shopmenu";

const Home = () => {
  return (
    <main className="min-h-screen mx-auto max-w-[1920px]">
      <Navigation />
      <Advertisement />
      <Breadcrumb />
      <Shopmenu />
    </main>
  );
};
export default Home;
