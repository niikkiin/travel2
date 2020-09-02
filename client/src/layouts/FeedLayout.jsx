import React from "react";
import Navbar from "components/navbar/Navbar";
import { RightSidebar } from "components/sidebar/RightSidebar";
import { LeftSidebar } from "components/sidebar/LeftSidebar";
import ProfileDropDown from "components/navbar/ProfileDropDown";

// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const FeedLayout = ({ toggleProfileDropdownHidden, children }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-16">
        <LeftSidebar />
        <div className="w-full lg:w-3/4">
          {/* bg-pink-500 sm:bg-purple-500 md:bg-green-500 lg:border-orange-500 xl:bg-blue-500  */}
          {toggleProfileDropdownHidden ? null : <ProfileDropDown />}
          {children}
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

FeedLayout.propTypes = {
  toggleProfileDropdownHidden: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  toggleProfileDropdownHidden: state.toggleProfileDropdown.hidden,
});
export default connect(mapStateToProps)(FeedLayout);
