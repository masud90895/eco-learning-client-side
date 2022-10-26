import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BiSelectMultiple } from "react-icons/bi";
import Pdf from "react-to-pdf";
import { AiFillStar } from "react-icons/ai";
import AnimatedText from "react-animated-text-content";
import { AuthContext } from "../../firebase/UserContext";
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
  const {enabled} = useContext(AuthContext)
  return (
    <div className={`  2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4  ${enabled ? "bg-black text-white" : "bg-gray-100 2xl:container "}`}>
      <div className=" text-6xl flex mb-12 font-bold ">
        <h2 className={`font-semibold w-full mx-auto lg:text-4xl text-3xl lg:leading-9 leading-7 ${enabled ? " text-white " : "text-gray-800"} mt-4 `}>
          <AnimatedText
            type="chars" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="diagonal"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            {project}
          </AnimatedText>
        </h2>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button   title="Download Feature " className="flex justify-around rounded-md items-center bg-green-200 hover:bg-green-400 hover:text-white px-2 h-[50px]" onClick={toPdf}>
              <p className="text-[20px] text-black">Download</p>
              <img
                className="w-[20%]"
              
                src="https://i.ibb.co/47nnPZb/icons8-download-96.png"
                alt=""
              />
            </button>
          )}
        </Pdf>
        
      </div>
      <div className=" flex flex-col-reverse items-center   gap-8">
        {/* <!-- Description Div --> */}

        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          

          <div className=" flex flex-row justify-between  mt-5">
            <div className=" flex flex-row space-x-3">
              <AiFillStar className="text-2xl text-orange-500" />
              <h1 className="text-xl font-bold">{Rating}</h1>
            </div>
            <p className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 ${enabled ? " text-white " : "text-gray-800"} hover:underline hover:text-gray-800 duration-100 cursor-pointer`}>
              Duration: {Duration}
            </p>
          </div>

          <p className={` font-normal text-base leading-6 ${enabled ? " text-white " : "text-gray-800"} mt-7`}>
            {ditailes}
          </p>
          <p className=" font-semibold lg:text-2xl text-start text-xl lg:leading-6 leading-5 mt-6 ">
           Course Price: <small className="text-red-400">${fee}</small>/-
          </p>
          <div ref={ref}>
            <h1 className="mt-5 underline text-2xl font-bold">
              This Course Features :
            </h1>
            {Feature.map((fr) => (
              <ul key={fr} className={`space-y-2 mb-2 text-xl  ${enabled ? " text-white " : "text-black"}`}>
                <li className="flex mt-4 items-start space-x-2">
                  <BiSelectMultiple />
                  <span>{fr}</span>
                </li>
              </ul>
            ))}
          </div>

          <Link to={`../chackout/${id}`}>
            <button className="focus:outline-none focus:ring-2 hover:bg-green-600 focus:ring-offset-2 font-medium text-base leading-4 border-2 rounded-lg border-green-600 hover:text-white text-black bg-white w-full py-5 lg:mt-12 mt-6">
              Get premium access
            </button>
          </Link>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className=" w-full mx-auto lg:w-8/12  bg-gray-100 flex justify-center items-center">
            <img  src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetaile;
