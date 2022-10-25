import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Popover } from "@headlessui/react";
import { AuthContext } from "../../firebase/UserContext";

const Navbar = () => {
  const [enabled, setEnabled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        // Sign-out successful.
        navigate("login");
      })
      .catch((error) => {
        // An error happened.
        console.error(error.massage);
      });
  };
  return (
    <header aria-label="Page Header" className="bg-gray-600">
      <div className="mx-auto  py-2 px-2  md:px-10 md:py-4">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="flex   lg:grid ">
            <Link to="/">
              <div className="flex md:w-[214px] lg:w-full items-center">
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
            </Link>
            {/* mobail view only  */}
            <div className="block lg:hidden flex ml-0 md:ml-[350px]  justify-between">
              <button
                type="button"
                className="group ml-1 flex shrink-0 items-center rounded-lg transition"
              >
                {user?.photoURL && (
                  <img
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                    src={user?.photoURL}
                  />
                )}
              </button>
              {user?.uid ? (
                <button
                  onClick={handleLogOut}
                  className="bg-green-600 text-white p-1 rounded-lg hover:border-2 md:mx-5 lg:mx-0 hover:border-green-600 hover:bg-white hover:text-black"
                >
                  logOut
                </button>
              ) : (
                <Link to="login">
                  <button className="bg-green-600 text-white p-1 rounded-lg hover:border-2 hover:border-green-600 hover:bg-white hover:text-black">
                    login
                  </button>
                </Link>
              )}
              <button onClick={() => setShowMenu(!showMenu)}>
                <img
                  className="w-10"
                  src="https://i.ibb.co/89QjS79/list.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="lg:flex hidden  flex-1 items-center  gap-8 justify-end">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 text-green-600 border-green-600" : ""
              }
              to="home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 text-green-600  border-green-600" : ""
              }
              to="courses"
            >
              Courses
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 text-green-600  border-green-600" : ""
              }
              to="faq"
            >
              FAQ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 text-green-600  border-green-600" : ""
              }
              to="blog"
            >
              Blog
            </NavLink>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-black" : "bg-white"}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-green-600 shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>

            {user || user?.uid ? (
              <button
                title={user?.displayName}
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition"
              >
                <span className="sr-only">Menu</span>
                {user?.photoURL && (
                  <Link to="profile">
                    <img
                      alt=""
                      src={user?.photoURL}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </Link>
                )}

                <p className="ml-2 hidden text-left text-xs sm:block ">
                  <strong className="block font-medium">
                    {user?.displayName}
                  </strong>

                  <span className="text-black"> {user?.email} </span>
                </p>
              </button>
            ) : (
              <button
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition"
              >
                <span className="sr-only">Menu</span>
              </button>
            )}
            {user?.uid ? (
              <button
                onClick={handleLogOut}
                className="bg-green-600 text-white p-2 rounded-lg  hover:border-green-600 hover:bg-white hover:text-black"
              >
                logOut
              </button>
            ) : (
              <Link to="login">
                <button className="bg-green-600 text-white p-2 rounded-lg  hover:border-green-600 hover:bg-white hover:text-black">
                  login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* mobail device menu  */}
      {showMenu && (
        <div className="flex  lg:hidden flex-col gap-2 text-center mr-7 text-xl">
          <Link to="Home">Home</Link>
          <Link to="courses">Courses</Link>
          <Link to="faq">FAQ</Link>
          <Link to="blog">Blog</Link>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-black" : "bg-white"}
          relative inline-flex h-[28px] w-[64px] mx-auto  shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[24px]  w-[24px] transform rounded-full bg-green-600 shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      )}
    </header>
  );
};

export default Navbar;
