import React, { useState } from "react";
// import PropTypes from 'prop-types'

// data
import { ACCOUNT_PROFILE_DATA } from "data/account-routes";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
const ProfileSidebar = (props) => {
  const [accountRoutes] = useState(ACCOUNT_PROFILE_DATA);
  return (
    <div className="py-8 md:w-1/4 flex flex-col border-r border-gray-400">
      {accountRoutes.map((account) => {
        const { id, name, routeName, icon } = account;
        return (
          <>
            {/* mobile */}
            <NavLink
              key={id}
              to={routeName}
              activeClassName="text-blue-500 bg-blue-100"
              className="md:hidden p-2 font-medium text-gray-800 hover:text-blue-500 hover:bg-blue-100 transition duration-300 mx-3 my-1 rounded-full"
            >
              <Icon className="w-6 h-6" icon={icon} />
            </NavLink>
            {/* web */}
            <NavLink
              key={id}
              to={routeName}
              activeClassName="text-blue-500 bg-blue-100"
              className="hidden md:block px-4 py-3 font-medium text-gray-800 hover:text-blue-500 hover:bg-blue-100 transition duration-300 mx-3 my-1 rounded-full"
            >
              {name}
            </NavLink>
          </>
        );
      })}
    </div>
  );
};

ProfileSidebar.propTypes = {};

export default ProfileSidebar;
