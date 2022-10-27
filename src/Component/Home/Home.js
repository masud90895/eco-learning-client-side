import React, { useContext } from "react";
import Lottie from "lottie-react";
import banner from "../../assist/e-learning.json";
import { Link } from "react-router-dom";
import AnimatedText from "react-animated-text-content";
import { AuthContext } from "../../firebase/UserContext";

const Home = () => {
  const {enabled} = useContext(AuthContext);
  return (
    <section className={enabled ? " bg-[#2e2e2e] text-white border border-white  bg-cover bg-center bg-no-repeat" : " bg-indigo-50  bg-cover bg-center bg-no-repeat"}>
      <div className=" inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"></div>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex font-serif z-10 flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl  font-bold leading-none ">
            Looking for Quality Courses?
          </h1>
          <h1 className="mt-6 mb-8 text-xl sm:mb-12">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Eco learning offers 199 Quality Management courses from top
              universities and companies to help you start or advance your
              career skills in Quality Management.
            </AnimatedText>
          </h1>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              
              to="../about"
              className="px-8 py-3 text-lg font-semibold border rounded hover:text-white  border-green-600 hover:bg-green-600 "
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
