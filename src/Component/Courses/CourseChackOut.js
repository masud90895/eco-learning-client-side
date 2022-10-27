import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/UserContext";
import Swal from "sweetalert2";
import AnimatedText from "react-animated-text-content";
import TextAnimation from "react-text-animations";
const CourseChackOut = () => {
  const chackoutData = useLoaderData();
  const { user, enabled } = useContext(AuthContext);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [changeText1, setChangeText1] = useState("City");
  const navigate = useNavigate();

  const HandleText1 = (e) => {
    setChangeText1(e);
    setDropdown1(false);
  };

  const handlechackOut = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure",
      text: "You want to enroll This Course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Enroll Success!", "Welcome Our Team.", "success");
        e.target.reset();
        navigate("/");
      }
    });
  };

  return (
    <div
      className={`overflow-y-hidden ${
        enabled ? "bg-[#2e2e2e] text-white " : "bg-gray-100 text-black"
      }`}
    >
      <div className="mt-5">
        <h1 className="text-xl">Your selected Course:</h1>
        <h1 title="Your Choices Courses" className="text-2xl font-bold">
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
            {chackoutData.project}
          </AnimatedText>
        </h1>
      </div>
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <form
            onSubmit={handlechackOut}
            className="flex w-full  flex-col justify-start items-start"
          >
            <div>
              <div
                className={`text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 ${
                  enabled ? " text-white " : "text-gray-800"
                }`}
              >
                <TextAnimation.Slide
                  target="Dear"
                  text={["Dear", "sweeting", "beloved"]}
                >
                  Welcome Dear
                </TextAnimation.Slide>
              </div>
            </div>
            <h1 className="text-xl py-3">
              <AnimatedText
                type="chars" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="bounce"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                {user?.displayName}
              </AnimatedText>
            </h1>
            {user?.email && <h1 className="text-md ">
              <AnimatedText
                type="chars" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="bounce"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
               {user?.email}
              </AnimatedText>
            </h1>}
            <div className="mt-12">
              <p
                className={`text-xl font-semibold leading-5 ${
                  enabled ? " text-white " : "text-gray-800"
                }`}
              >
                Student Details
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="First Name"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Address"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full text-black"
                type="text"
                placeholder="Address (line 02)"
              />
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div
                  className={`relative w-full ${enabled ? " bg-white " : ""}`}
                >
                  <p
                    id="button1"
                    className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    {changeText1}
                  </p>
                  <button
                    onClick={() => setDropdown1(!dropdown1)}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <svg
                      id="close"
                      className={` transform ${
                        dropdown1 ? "rotate-180" : ""
                      }  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${
                      dropdown1 ? "" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col  w-full">
                      <p
                        tabIndex={0}
                        onClick={() => HandleText1("London")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        London
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => HandleText1("New York")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        New York
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => HandleText1("Dubai")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`relative w-full ${enabled ? " bg-white " : ""}`}
                >
                  <p
                    id="button2"
                    className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    Region
                    <span className="text-gray-400"> (optional)</span>
                  </p>
                  <button
                    onClick={() => setDropdown2(!dropdown2)}
                    className="focus:outline-none  focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <svg
                      id="close2"
                      className={` transform ${
                        dropdown2 ? "rotate-180" : ""
                      }  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${
                      dropdown2 ? "" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col  w-full">
                      <p
                        tabIndex={0}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        London
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        New York
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div
                  className={`relative w-full ${enabled ? " bg-white " : ""}`}
                >
                  <p
                    id="button3"
                    className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    Country
                  </p>
                  <button
                    onClick={() => setDropdown3(!dropdown3)}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <svg
                      id="close3"
                      className={` transform ${
                        dropdown3 ? "rotate-180" : ""
                      }  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="menu3"
                    className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${
                      dropdown3 ? "" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col  w-full">
                      <p
                        tabIndex={0}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        USA
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        UK
                      </p>
                      <p
                        tabIndex={0}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        Russia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <input
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <input
                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <button
              type="submit"
              className={`focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4  py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 ${
                enabled
                  ? " text-white hover:bg-white hover:text-black"
                  : "text-gray-800 hover:bg-black"
              }`}
            >
              Proceed to payment
            </button>
            <div className="mt-4 flex justify-start items-center w-full">
              <Link
                to="../courses"
                className={`text-base leading-4 underline focus:outline-none focus:text-gray-500  ${
                  enabled ? " text-white " : "text-gray-800"
                }`}
              >
                Back to Courses
              </Link>
            </div>
          </form>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  1
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  ${chackoutData?.fee}
                </p>
              </div>

              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  ${chackoutData?.fee}
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total{" "}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                ${chackoutData?.fee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseChackOut;
