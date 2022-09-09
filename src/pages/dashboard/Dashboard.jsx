import { Outlet } from "react-router-dom";
import { FoodCard } from "../../components/Cards";
import Sidebar from "./Sidebar";
import { special } from "../../data/data";

const Dashboard = () => {
  const userData = JSON.parse(window.localStorage.getItem("user"));

  const date = new Date();
  const hours = date.getHours()

  let greeting = 'day'


  // Greeting feature
  if(hours > 17){
    greeting = 'afternoon'
  } else if(hours > 12){
    greeting = 'evening'
  } else {
    greeting = 'morning'
  }


  return (
    <div className="flex h-screen relative">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="pt-10 px-4 overflow-x-hidden w-full">

        <section>
          <div className="mb-4 md:hidden">
            <nav className="text-[#00302E] py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </nav>
          </div>
          <header className="font-semibold text-2xl text-[#00302E]">
            Good {greeting}{userData && ", " + userData.firstName + "."}
          </header>
          <p className="text-sm">What delicious meal are you craving today?</p>
        </section>

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
