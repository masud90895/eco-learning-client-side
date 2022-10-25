import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BiSelectMultiple } from "react-icons/bi";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import toast from "react-hot-toast";
import { AiFillStar } from 'react-icons/ai';
const ref = React.createRef();
const CourseDetaile = () => {
  const courseData = useLoaderData();
  const {
    id,
    project,
    category,
    image,
    ditailes,
    fee,
    Duration,
    Feature,
    Rating,
    level,
  } = courseData;
  return (
    <div className="2xl:container   2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4  bg-gray-100">
      
      <div className=" text-6xl flex mb-12 font-bold shadow">
        <h2 className="font-semibold w-full mx-auto lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
          {project}
        </h2>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf}>
              <img
              title="Download Feature "
                src="https://i.ibb.co/47nnPZb/icons8-download-96.png"
                alt=""
              />
            </button>
          )}
        </Pdf>
        {/* <button className="">
          <img src="https://i.ibb.co/47nnPZb/icons8-download-96.png" alt="" />
        </button> */}
      </div>
      <div className=" flex flex-col-reverse items-center   gap-8">
        {/* <!-- Description Div --> */}

        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          {/* <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{project}</h2> */}

          <div className=" flex flex-row justify-between  mt-5">
            <div className=" flex flex-row space-x-3">
              <AiFillStar className="text-2xl text-orange-500"/>
              <h1 className="text-xl font-bold">{Rating}</h1>
            </div>
            <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
             Duration: {Duration}
            </p>
          </div>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {ditailes}
          </p>
          <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
            ${fee}/-
          </p>
          <div ref={ref}>
            <h1 className="mt-5 text-2xl font-bold">This Course Feather :</h1>
            {Feature.map((fr) => (
              <ul key={fr} className="space-y-2 mb-2 text-xl  text-black">
                <li className="flex mt-4 items-start space-x-2">
                  <BiSelectMultiple />
                  <span>{fr}</span>
                </li>
              </ul>
            ))}
          </div>

          <Link to={`../chackout/${id}`}><button className="focus:outline-none focus:ring-2 hover:bg-green-600 focus:ring-offset-2 font-medium text-base leading-4 border-2 rounded-lg border-green-600 text-black bg-white w-full py-5 lg:mt-12 mt-6">
            Get premium access
          </button>
          </Link>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className=" w-full mx-auto lg:w-8/12 bg-gray-100 flex justify-center items-center">
            <img src={image} alt="Wooden Chair Previw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetaile;
