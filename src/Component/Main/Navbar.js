import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const Navbar = () => {
  const [enabled, setEnabled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header aria-label="Page Header" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl py-2 px-2  md:px-4 md:py-4">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="flex md:grid">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-green-600">ECO</span> LEARNING{" "}
              </h1>
              <span>
                <img
                  className="w-[40px]"
                  src="https://i.ibb.co/V93Tz4d/nature-eco-education-removebg-preview.png"
                  alt=""
                />
              </span>
            </div>
            {/* mobail view only  */}
            <div className="block md:hidden flex  justify-between">
              <button
                type="button"
                className="group ml-1 flex shrink-0 items-center rounded-lg transition"
              >
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </button>
              <Link to="login">
                <button className="bg-green-600 mx-1 text-white p-2 rounded-lg hover:border-2 hover:border-green-600 hover:bg-white  hover:text-black">
                  login
                </button>
              </Link>
              <button onClick={() => setShowMenu(!showMenu)}>
                <img
                  className="w-10"
                  src="https://i.ibb.co/89QjS79/list.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="md:flex hidden  flex-1 items-center  gap-8 justify-end">
            <Link to="courses">Courses</Link>
            <Link to="faq">FAQ</Link>
            <Link to="blog">Blog</Link>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-black" : "bg-gray-600"}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>

            <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              <span className="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />

              <p className="ml-2 hidden text-left text-xs sm:block">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span className="text-gray-500"> eric@frusciante.com </span>
              </p>
            </button>
            <Link to="login">
              <button className="bg-green-600 text-white p-2 rounded-lg hover:border-2 hover:border-green-600 hover:bg-white hover:text-black">
                login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* mobail device menu  */}
      {showMenu && (
        <div className="flex flex-col gap-2 text-center mr-7 text-xl">
          <Link to="courses">Courses</Link>
          <Link to="faq">FAQ</Link>
          <Link to="blog">Blog</Link>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-black" : "bg-gray-600"}
          relative inline-flex h-[28px] w-[64px] mx-auto  shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[24px]  w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      )}
    </header>
  );
};

export default Navbar;
