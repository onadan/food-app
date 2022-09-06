import { Outlet } from "react-router-dom";
import { FoodCard } from "../../components/Cards";
import Sidebar from "./Sidebar";
import { special } from "../../data/data";

const Dashboard = () => {
  const name = "Daniel";

  return (
    <div className="flex h-screen relative">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="pt-10 px-4 overflow-x-hidden w-full">
        <div className="">
          <header className="font-semibold text-2xl text-[#00302E]">
            Good morning, {name}.
          </header>
          <p className="text-sm">What delicious meal are you craving today?</p>
        </div>
        <section className="my-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 enter gap-10 flex-wrap">
            {special &&
              special.map((food) => (
                <FoodCard
                  key={food.id}
                  id={food.id}
                  image={food.image}
                  name={food.name}
                  desc={food.desc}
                  price={food.price}
                />
              ))}
          </div>
        </section>
      </div>

      <div className="absolute top-0 left-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
