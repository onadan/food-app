import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import appstore from "../assets/icons/appstore.svg";
import playstore from "../assets/icons/playstore.svg";
import heroimg from "../assets/images/heroimg.png";
import { LandingPageCard } from "../components/Cards";
import { Button003 } from "../components/Button";
import { specials } from "../data/data";

const LandingPage = () => {
  return (
    <div className="bg-[#00302E] text-white overflow-hidden">
      <div className=" max-w-[80rem] mx-auto px-4">
        <Navbar />

        <main className="py-10 pt-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className=" sm:w-5/6 md:w-4/6">
              <h1 className="font-medium text-5xl md:text-6xl my-3">
                Order <span className="text-[#ffcc1d]">food</span> anytime,
                anywhere
              </h1>
              <p className="sm:w-4/5 text-sm font-normal md:text-lg">
                Browse from our list of specials to place your order and have
                food delivered to you in no time. Affordable, fresh, tasty and
                fast!
              </p>
              <div className="flex flex-col justify-center">
                <div className="my-10 self-center md:hidden">
                  <img
                    src={heroimg}
                    alt=""
                    className="max-h-[300px] w-[auto]"
                  />
                </div>
                {/* <div className="flex py-4 flex-wrap gap-2 justify-center sm:justify-start"> */}
                <div className="grid grid-flow-col py-4 gap-2 justify-center md:justify-start">
                  <img src={playstore} alt="play-store" className="mr-3" />
                  <img src={appstore} alt="app-store" />
                </div>
              </div>
            </div>

            <div className="m-4 hidden md:block">
              <img src={heroimg} alt="" className="max-h-[300px] w-[auto]" />
            </div>
          </div>
        </main>

        <section className="flex flex-col items-center my-10 py-10">
          <header className="font-bold text-2xl sm:text-4xl">
            Special Meals of the day!
          </header>
          <p className="font-light md:font-normal text-sm sm:text-center py-4 mb-4">
            Check our specials of the day and get discounts on all our meals and
            swift delivery to whatever location within Ibadan.
          </p>
          <div className="md:grid md:grid-cols-3 justify-between items-center md:gap-28">
            {specials &&
              specials.map((food) => (
                <LandingPageCard key={food.id} image={food.image} name={food.name} desc={food.desc}/>
              ))}
          </div>
        </section>

        <section className="my-10">
          <div className="md:grid md:grid-cols-2 gap-10 md:items-center">
            <div className="mb-5">
              <header className="w-[4/6] font-extrabold text-2xl md:text-3xl text-[#ffcc1d]">
                Get notified when we update!
              </header>
              <p className="py-4 text-sm sm:w-5/6">
                Get notified when we add new items to our specials menu, update
                our price list or have promos!
              </p>
            </div>

            <div className="">
              <form className="flex flex-wrap gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className=" p-2 rounded text-[#00302E] outline-none bg-emerald-700 ease-in duration-300 focus:bg-emerald-100"
                />

                <div>
                  <Button003>Get Notified</Button003>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
