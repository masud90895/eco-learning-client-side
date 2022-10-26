import React from "react";
import { NavLink } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div className=" relative shadow-xl rounded-lg border bg-white ">
      <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
        <p className="text-xs leading-3 text-gray-800">New</p>
      </div>
      <div className=" relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img className=" w-full h-[250px] rounded-lg" src={course?.image} alt="" />
        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <NavLink to={`${course.id}`}>
            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
      <p className="  text-left p-2 text-xl font-bold leading-5 text-black md:mt-2 mt-4">
        {course?.project}
      </p>
      <p className=" font-normal text-left p-2 text-xl leading-5 text-gray-800  mt-2">
        category: {course?.category}
      </p>
      <p className="  text-left p-2 text-xl leading-5 text-gray-800 mt-1">
        level : {course?.level}
      </p>
      <p className=" font-semibold text-left p-2 text-xl leading-5 text-gray-800 mt-2">
        Price : ${course?.fee}
      </p>
      <p className=" font-normal text-left p-2 text-base leading-4 text-gray-600 mt-2">
        Duration : {course?.Duration}
      </p>
      <NavLink to={`${course.id}`}>
        <button className=" border-green-600 hover:text-white font-medium  text-base leading-4 border-2  py-3 w-[40%] rounded hover:bg-green-600  mb-2 mt-2 text-black">
          View Details
        </button>
      </NavLink>
    </div>
  );
};

export default Course;
