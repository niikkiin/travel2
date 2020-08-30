import React from "react";
// import PropTypes from "prop-types";

// router
import { Link } from "react-router-dom";


// icons
import { Icon, InlineIcon } from "@iconify/react";
import cogOutline from '@iconify/icons-mdi/cog-outline';
import homeVariant from '@iconify/icons-mdi/home-variant';
import locationIcon from '@iconify/icons-tabler/location';
import bxPlusCircle from '@iconify/icons-bx/bx-plus-circle';
import compassIcon from '@iconify/icons-fa-regular/compass';
import bxHeart from '@iconify/icons-bx/bx-heart';

const Navbar = (props) => {
  const navLinks = [
    {
      id: 1,
      icon: homeVariant,
      routePath: '/'
    },
    {
      id: 2,
      icon: locationIcon,
      routePath: '/'
    },
    {
      id: 3,
      icon: bxPlusCircle,
      routePath: '/'
    },
    {
      id: 4,
      icon: compassIcon,
      routePath: '/'
    },
    {
      id: 5,
      icon: bxHeart,
      routePath: '/'
    },

  ]
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-1 border-b border-gray-400">
      {/* <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-1 border-b border-gray-400"></nav> */}
      <div className="flex items-center mr-6 text-2xl font-medium min-w-max-content">
      {/* <div className="flex items-center flex-shrink-0 mr-6 text-2xl font-medium"> */}
        Logo Goes Here
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full flex items-center">
      {/* <div className="w-full block flex-grow justify-between lg:flex lg:items-center lg:w-auto"> */}
        <div className="text-sm ">
        {/* <div className="text-sm lg:flex-grow"> */}
          {navLinks.map(nav => {
            const { id, icon, routePath } = nav;
            return (
              <Link key={id} to={routePath} className="inline-block">
                <Icon icon={icon} className="w-10 h-10" />
              </Link>
            )
          })}
          {/* <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a> */}
        </div>
        <Link to='/' className="flex items-center text-xl px-4 py-2 leading-none text-gray-900 border-white hover:text-blue-800 mt-4 lg:mt-0">
          <img
            className="rounded-full border border-gray-400 inset-0 w-12"
            src="https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg"
            alt="user"
          />
          <span className="ml-2 min-w-max-content text-2xl font-medium">Sam Rose</span>
          <InlineIcon className="w-8 h-8 ml-4" icon={cogOutline} />
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
