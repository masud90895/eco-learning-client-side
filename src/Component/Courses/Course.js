import React from "react";
import { NavLink } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div className=" relative shadow-xl border border-green-600">
      <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
        <p className="text-xs leading-3 text-gray-800">New</p>
      </div>
      <div className=" relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img className=" w-full" src={course?.image} alt="A girl Posing Img" />
        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <NavLink to={`${course.id}`}>
            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
              Buy Course
            </button>
          </NavLink>
        </div>
      </div>
      <p className=" font-normal text-left p-2 text-xl leading-5 text-gray-800 md:mt-6 mt-4">
        {course?.project}
      </p>
      <p className=" font-normal text-left p-2 text-xl leading-5 text-gray-800 md:mt-6 mt-4">
        category: {course?.category}
      </p>
      <p className="  text-left p-2 text-xl leading-5 text-gray-800 mt-4">
        level : ${course?.level}
      </p>
      <p className=" font-semibold text-left p-2 text-xl leading-5 text-gray-800 mt-4">
        Price : ${course?.fee}
      </p>
      <p className=" font-normal text-left p-2 text-base leading-4 text-gray-600 mt-4">
        Duration : {course?.Duration}
      </p>
      <NavLink to={`${course.id}`}>
        <button className=" border-green-600 font-medium  text-base leading-4 border-2  py-3 w-[40%] rounded hover:bg-green-600  mb-2 mt-2 text-black">
          Buy Course
        </button>
      </NavLink>
    </div>
  );
};

export default Course;
