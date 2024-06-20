import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogIn from "./Login";
import logo from "../assets/logo.png";

const Header = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsDropdown1Open(false);
    setIsDropdown2Open(false);
  }, [location]);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen((prevState) => !prevState); // Toggles the modal state
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // const handleSignOut = () => {
  //   window.google.accounts.id.disableAutoSelect();
  //   window.google.accounts.id.prompt();
  //   window.location.href = "https://accounts.google.com/logout";
  //   window.google.accounts.id.revoke(() => {
  //     console.log("User signed out.");
  //   });
  // };

  return (
    <header className="bg-header">
      <nav className="flex justify-between items-center 2-[92%] mx-auto">
        <div className="space-y-4 p-2 pl-4">
          <img src={logo} alt="Logo" className="h-20 spacing" />
        </div>
        <div>
          <button
            className="text-xl rounded-lg bg-yellow-400 font-color px-5 py-2 mr-5 hover:text-white hover:bg-blue-300"
            onClick={handleLoginButtonClick}
          >
            Log In
          </button>
          <button className="text-xl rounded-lg bg-yellow-400 font-color px-5 py-2 mr-10 hover:text-white hover:bg-blue-300">
            Watch Live
          </button>
        </div>
      </nav>
      <div className="w-full bg-yellow-400 font-color px-10">
        <div className="flex justify-center items-center">
          <ul className="flex text-center gap-[4vw] my-2">
            <li>
              <NavLink className="text-xl hover:text-white" to="/Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl hover:text-white" to="/TeleRadio">
                TeleRadio
              </NavLink>
            </li>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex gap-x-1.5 rounded-md  text-xl shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    setIsDropdown1Open(!isDropdown1Open);
                    setIsDropdown2Open(false);
                  }}
                >
                  Courses
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              {isDropdown1Open && (
                <div
                  className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <NavLink to="courses/Bab">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        BAB
                      </a>
                    </NavLink>
                  </div>
                  <div className="py-1" role="none">
                    <NavLink to="courses/BsisAct">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        BSIS/ACT
                      </a>
                    </NavLink>
                  </div>
                  <div className="py-1" role="none">
                    <NavLink to="courses/BsaBsais">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        BSA/BSAIS
                      </a>
                    </NavLink>
                  </div>
                  <div className="py-1" role="none">
                    <NavLink to="courses/Bssw">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-3"
                      >
                        BSSW
                      </a>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <li>
              <NavLink className="text-xl hover:text-white" to="/OurStory">
                Our Story
              </NavLink>
            </li>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex gap-x-1.5 rounded-md  text-xl shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => {
                    setIsDropdown2Open(!isDropdown2Open);
                    setIsDropdown1Open(false);
                  }}
                >
                  Archives
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              {isDropdown2Open && (
                <div
                  className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <NavLink to="/Archives">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        Archives
                      </a>
                    </NavLink>
                  </div>
                  <div className="py-1" role="none">
                    <NavLink to="/PastArchives">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        Past Archives
                      </a>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
      {isLoginModalOpen && (
        <LogIn
        // isOpen={isLoginModalOpen}
        // onClose={handleCloseLoginModal}
        />
      )}
    </header>
  );
};

export default Header;
