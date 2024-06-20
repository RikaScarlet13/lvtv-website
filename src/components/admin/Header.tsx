import { useState } from "react";

const Header = () => {
  // State for handling sidebar and notification toggles
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [notificationOpen, setNotificationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle notification function
  // const toggleNotification = () => {
  //   setNotificationOpen(!notificationOpen);
  // };

  // Toggle dropdown function
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      {/* Sidebar Toggle Button */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Search Input */}
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center">
        {/* Notification Dropdown */}

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          >
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              alt="Your avatar"
            />
          </button>

          {/* Profile Dropdown Overlay */}
          {dropdownOpen && (
            <div
              className="fixed inset-0 z-10 w-full h-full"
              onClick={() => setDropdownOpen(false)}
            ></div>
          )}

          {/* Profile Dropdown Content */}
          {dropdownOpen && (
            <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >
                Products
              </a>
              <a
                href="/admin/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
