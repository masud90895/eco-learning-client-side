import React from "react";
import Lottie from "lottie-react";
import banner from "../../assist/e-learning.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className=" relative bg-[url(https://i.ibb.co/FKjjPFW/20544.jpg)] bg-cover bg-center bg-no-repeat">
        <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
  ></div>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex z-10 flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none ">
            Looking for Quality Courses?
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
          Eco learning offers 199 Quality Management courses from top universities and companies to help
            <br className="hidden md:inline lg:hidden" />
            you start or advance your career skills in Quality Management.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to='about'
              className="px-8 py-3 text-lg font-semibold border rounded  border-green-600 hover:bg-green-600 "
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Lottie
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            animationData={banner}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
