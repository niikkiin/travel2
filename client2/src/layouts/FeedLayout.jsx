import React from "react";
import Navbar from "components/navbar/Navbar";
import { RightSidebar } from "components/sidebar/RightSidebar";
import { LeftSidebar } from "components/sidebar/LeftSidebar";
import ProfileDropDown from "components/navbar/ProfileDropDown";

// redux
import { connect } from 'react-redux';

const FeedLayout = ({ toggleProfileDropdownHidden, children }) => {
  return (
    <>
      <Navbar/>
      <div className="flex h-full pt-16">
        <LeftSidebar />
        <div className="w-2/4">
          {toggleProfileDropdownHidden ? null : <ProfileDropDown /> }
          {children}
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  toggleProfileDropdownHidden: state.toggleProfileDropdown.hidden
});
export default connect(mapStateToProps)(FeedLayout);
