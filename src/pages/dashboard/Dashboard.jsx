// import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="">
        <Sidebar />
      </div>

      <div className="pt-10 px-4 overflow-x-hidden">
        <div className="">
          <header className="font-semibold text-2xl text-[#00302E]">Good morning, Adex!</header>
          <p className="text-sm">What delicious meal are you craving today?</p>
        </div>
        <section>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
