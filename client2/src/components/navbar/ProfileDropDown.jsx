import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileDropDown = (props) => {
  return (
    <div class="origin-top-right absolute  right-0 mr-10 mt-2 w-56 rounded-md shadow-lg">
      <div class="rounded-md bg-white shadow-xs">
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Profile
          </Link>
          <Link
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Settings
          </Link>
          <form method="POST" action="#">
            <Link to='/'
              type="submit"
              class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Logout
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

ProfileDropDown.propTypes = {};

export default ProfileDropDown;
