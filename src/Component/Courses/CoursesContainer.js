import React, { useContext } from "react";
import { AuthContext } from "../../firebase/UserContext";
import Course from "./Course";

const CoursesContainer = ({ courses }) => {
  const { enabled } = useContext(AuthContext);
  return (
    <div
      className={
        enabled
          ? "  2xl:container 2xl:mx-auto border border-white bg-black text-white bg-cover bg-center bg-no-repeat"
          : "  2xl:container 2xl:mx-auto     bg-cover bg-center bg-no-repeat"
      }
    >
      <div className=" inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"></div>
      <div
        className={
          enabled
            ? "   bg-black text-white border border-white  text-center lg:py-10 md:py-8 py-6"
            : "   bg-gray-50  text-center lg:py-10 md:py-8 py-6"
        }
      >
        <p
          className={` w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center  ${
            enabled ? "text-white" : "text-gray-800"
          }`}
        >
          Discover Our Popular Courses
        </p>
      </div>
      <div className="   py-6 lg:px-20 md:px-6 px-4">
        <p
          className={` font-normal text-sm leading-3 ${
            enabled ? "text white" : "text-gray-600 "
          }`}
        >
          Home / Courses by Category / Course
        </p>
        <hr className=" w-full bg-gray-200 my-6" />

        <div className=" flex justify-between items-center">
          <div className=" flex space-x-3 justify-center items-center">
            <svg
              className=" cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 7.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 12H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 16.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <p className={` font-normal text-base leading-4  ${enabled ? "text-white " : "text-gray-800"}`}>
              Filter
            </p>
          </div>
          <p className={` cursor-pointer hover:underline duration-100 font-normal text-base leading-4  ${enabled ? "text-white " : "text-gray-800"}`}>
            Showing {courses?.length} Courses
          </p>
        </div>

        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesContainer;
