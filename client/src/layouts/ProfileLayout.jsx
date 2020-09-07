import React, { useRef } from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { toggleProfileDropdown } from "store/actions/toggle.action";

// components
import ProfileDropDown from "components/navbar/ProfileDropDown";
import Navbar from "components/navbar/Navbar";
import ProfileSidebar from "components/sidebar/ProfileSidebar";

// utilities
import useOutsideClick from "utilities/useOutsideClick";

const ProfileLayout = ({ open, toggleProfileDropdown, children }) => {
  const openDropdownRef = useRef();

  useOutsideClick(openDropdownRef, () => {
    if (open) toggleProfileDropdown(false);
  });
  return (
    <>
      <Navbar />
      <div className="flex h-full lg:pt-8  ">
        <div className="w-full lg:w-3/4 xl:w-2/4 xl:mt-12 sm:mx-auto ">
          {/* bg-pink-500 sm:bg-purple-500 md:bg-green-500 lg:bg-orange-500 xl:bg-indigo-500  */}
          {/* {open ? null : <ProfileDropDown />} */}
          {open && (
            <div
              className="ease-in-out duration-300 transition fade"
              ref={openDropdownRef}
            >
              <ProfileDropDown />
            </div>
          )}

          <div className="w-full flex mt-12 lg:my-12 mx-auto border border-gray-400">
            <ProfileSidebar />

            {children}
          </div>
        </div>
      </div>
    </>
  );
};

ProfileLayout.propTypes = {
  toggleProfileDropdownHidden: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  open: state.toggle.open,
});

export default connect(mapStateToProps, { toggleProfileDropdown })(
  ProfileLayout
);
