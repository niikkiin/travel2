import React, { useState } from "react";
// import PropTypes from "prop-types";

// router
import { Link } from "react-router-dom";

// icons
import { Icon, InlineIcon } from "@iconify/react";
import cogOutline from "@iconify/icons-mdi/cog-outline";
import homeVariant from "@iconify/icons-mdi/home-variant";
import locationIcon from "@iconify/icons-tabler/location";
import bxPlusCircle from "@iconify/icons-bx/bx-plus-circle";
import compassIcon from "@iconify/icons-fa-regular/compass";
import bxHeart from "@iconify/icons-bx/bx-heart";

const Navbar = (props) => {
  const [navToggle, setNavToggle] = useState(false);
  const navLinks = [
    {
      id: 1,
      icon: homeVariant,
      routePath: "/",
      name: "Home",
    },
    {
      id: 2,
      icon: locationIcon,
      routePath: "/messages",
      name: "Messages",
    },
    {
      id: 3,
      icon: bxPlusCircle,
      routePath: "/",
      name: "Create Post",
    },
    {
      id: 4,
      icon: compassIcon,
      routePath: "/",
      name: "Profile",
    },
    {
      id: 5,
      icon: bxHeart,
      routePath: "/",
      name: "Likes",
    },
  ];
  return (
    <nav className="flex flex-col lg:flex-row items-center md:items-start justify-between bg-gray-100 p-1 border-b border-gray-400">
      <div className="my-auto flex justify-between items-center w-full lg:w-1/4">
        {/* logo */}
        <div className="text-base w-auto">
          <div className="flex items-center mr-6 text-2xl md:mt-1 font-medium min-w-max-content ml-4">
            Logo Goes Here
          </div>
        </div>
        {/* toggle button */}
        <div className="block lg:hidden">
          <button
            onClick={(e) => setNavToggle(!navToggle)}
            className="flex items-center px-3 py-2 border rounded mr-4 my-2 text-gray-800 border-gray-400 outline-none active:outline-none active:border focus:outline-none  hover:text-blue-600 hover:border-white"
          >
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
      </div>

      {/* new nav on smaller device */}
      {navToggle ? (
        <div className="lg:hidden text-base flex flex-col w-full">
          {navLinks.map((nav) => {
            const { id, icon, routePath, name } = nav;
            return (
              <Link onClick={e => setNavToggle(false)} key={id} to={routePath} className="flex items-center border-gray-400 border-b p-2">
                <InlineIcon icon={icon} className="w-8 h-8 mr-2" />
                <div className="text-base">{name}</div>
              </Link>
            );
          })}
        </div>
      ) : null}

      {/* icons */}
      <div className="w-3/4 lg:flex hidden">
        <div className="text-base w-3/4 flex justify-evenly items-center">
          {navLinks.map((nav) => {
            const { id, icon, routePath } = nav;
            return (
              <Link key={id} to={routePath} className="inline-block">
                <Icon icon={icon} className="w-10 h-10" />
              </Link>
            );
          })}
        </div>
        {/* profile */}
        <div className="hidden lg:block text-base w-3/12">
          <Link
            to="/"
            className="flex items-center text-xl px-4 py-2 leading-none text-gray-900 border-white hover:text-blue-800 mt-4 lg:mt-0"
          >
            <img
              className="rounded-full border border-gray-400 inset-0 w-12"
              src="https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg"
              alt="user"
            />
            <span className="ml-2 min-w-max-content text-2xl md:text-xl font-medium">
              Sam Rose
            </span>
            <InlineIcon className="w-8 h-8 ml-4" icon={cogOutline} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
