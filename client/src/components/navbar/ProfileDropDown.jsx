import React from "react";
import PropTypes from "prop-types";

// routes
import { Link } from "react-router-dom";

// redux
import { toggleProfileDropdown } from "store/actions/toggleProfile.action";
import { connect } from "react-redux";

const ProfileDropDown = ({toggleProfileDropdown}) => {
  return (
    <div className="origin-top-right absolute  right-0 mr-10 mt-2 w-56 z-50 rounded-md shadow-lg">
      <div className="rounded-md bg-white shadow-xs">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            to="/account-update"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Settings
          </Link>
          <form method="POST" action="#">
            <Link
              to="/"
              type="submit"
              className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
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

ProfileDropDown.propTypes = {
  toggleProfileDropdown: PropTypes.func.isRequired,
};


export default connect(null, { toggleProfileDropdown })(ProfileDropDown);
