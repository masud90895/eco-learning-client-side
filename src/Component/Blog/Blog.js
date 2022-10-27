import React, { useContext, useState } from "react";
import { AuthContext } from "../../firebase/UserContext";
const Blog = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const { enabled } = useContext(AuthContext);
  return (
    <div
      className={` lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 ${
        enabled ? " bg-[#2e2e2e]   text-white " : "lg:container "
      }`}
    >
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-green-600 font-semibold">
        Blog's
      </h1>

      <div
        className={` lg:mt-12  md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ${
          enabled ? " bg-[#2e2e2e] border border-white" : "bg-gray-100"
        }`}
      >
        <div className=" flex justify-between md:flex-row flex-col ">
          <div className=" md:mb-0 mb-8 md:text-left text-center">
            <h2
              className={`font-medium text-xl leading-5 ${
                enabled ? " text-white " : "text-gray-800"
              } lg:mb-2 mb-4`}
            >
              Questions
            </h2>
            <p
              className={` font-normal text-sm leading-5 ${
                enabled ? " text-white " : "text-gray-600"
              } md:w-8/12 md:ml-0 w-11/12 mx-auto`}
            >
              If you don’t find your answer, Please contact us or Leave a
              Message, we’ll be more than happy to assist you.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <input
                className="focus:outline-none bg-white"
                type="text"
                placeholder="Search"
              />
              <svg
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-8/12 w-full mx-auto">
        {/* <!-- Question 1 --> */}
        <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className={enabled ? " text-white " : "text-gray-800"}>
              <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 ">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold ">
                  Q1.
                </span>{" "}
                what is cors?
              </p>
            </div>
            <button
              aria-label="toggler"
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ${
                enabled ? " bg-white " : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open ? "block" : "hidden")}
          >
            <p
              className={`text-base text-left leading-6 ${
                enabled ? " text-white " : "text-gray-600"
              } font-normal`}
            >
              <strong>Cors:</strong> Sometimes the files we upload on the
              firebase storage can't be accessed, it can be simply viewed but we
              will not have access to modify or access when it is necessary.
              CORS (Cross-Origin Resource Sharing) is one of the best solution
              to overcome this issue which helps to access web resources from
              different domains.
            </p>
          </div>
        </div>

        {/* <!-- Question 2 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className={enabled ? " text-white " : "text-gray-800"}>
              <p className="flex text-left justify-center items-center font-medium text-base leading-6 lg:leading-4 ">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold">
                  Q2.
                </span>{" "}
                Why are you using firebase? What other options do you have to
                implement authentication?
              </p>
            </div>
            <button
              aria-label="toggler"
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ${
                enabled ? " bg-white " : ""
              }`}
              onClick={() => setOpen2(!open2)}
            >
              <svg
                className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
          >
            <p
              className={`text-base text-left leading-6 ${
                enabled ? " text-white " : "text-gray-600"
              } font-normal`}
            >
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more. <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </p>
          </div>
        </div>

        {/* <!-- Question 3 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div
              className={`text-base text-left leading-6 ${
                enabled ? " text-white " : "text-gray-600"
              } font-normal`}
            >
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 ">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold ">
                  Q3.
                </span>
                How does the private route work?
              </p>
            </div>
            <button
              aria-label="toggler"
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ${
                enabled ? " bg-white " : ""
              }`}
              onClick={() => setOpen3(!open3)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
          >
            <p
              className={`text-base text-left leading-6 ${
                enabled ? " text-white " : "text-gray-600"
              } font-normal`}
            >
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.PrivateRoute component is the blueprint
              for all private routes in the application. If the user is logged
              in, go on and display the component in question; otherwise,
              redirect the user to sign-in page. Additionally, we can define the
              logic of isLogin utility function separately in utils folder.
            </p>
          </div>
        </div>

        {/* <!-- Question 4 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div
              className={`text-base text-left leading-6 ${
                enabled ? " text-white " : "text-gray-600"
              } font-normal`}
            >
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 ">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold ">
                  Q4.
                </span>
                What is Node? How does Node work?
              </p>
            </div>
            <button
              aria-label="toggler"
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ${
                enabled ? " bg-white " : ""
              }`}
              onClick={() => setOpen4(!open4)}
            >
              <svg
                className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full  " + (open4 ? "block" : "hidden")}
          >
            <p
              className={`text-base text-left leading-6 ${
                enabled ? " text-white " : "text-gray-600"
              } font-normal`}
            >
              Node. js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node. js wastes no time or
              resources on waiting for I/O requests to return. <br /> It is a
              used as backend service where javascript works on the server-side
              of the application. This way javascript is used on both frontend
              and backend. Node. js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
