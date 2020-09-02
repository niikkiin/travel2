import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileDropDown from "components/navbar/ProfileDropDown";
import Navbar from "components/navbar/Navbar";
import ProfileSidebar from "components/sidebar/ProfileSidebar";

const ProfileLayout = ({ toggleProfileDropdownHidden, children }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full lg:pt-8  ">
        <div className="w-full lg:w-3/4 xl:w-2/4 xl:mt-12 sm:mx-auto">
          {/* bg-pink-500 sm:bg-purple-500 md:bg-green-500 lg:border-orange-500 xl:bg-blue-500  */}
          {toggleProfileDropdownHidden ? null : <ProfileDropDown />}
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
  toggleProfileDropdownHidden: state.toggleProfileDropdown.hidden,
});

export default connect(mapStateToProps)(ProfileLayout);
