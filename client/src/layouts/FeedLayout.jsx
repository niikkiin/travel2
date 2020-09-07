import React, { useRef } from "react";
import PropTypes from "prop-types";

// components
import Navbar from "components/navbar/Navbar";
import { RightSidebar } from "components/sidebar/RightSidebar";
import { LeftSidebar } from "components/sidebar/LeftSidebar";
import ProfileDropDown from "components/navbar/ProfileDropDown";

// redux
import { connect } from "react-redux";
import { toggleProfileDropdown } from "store/actions/toggle.action";

// utilities
import useOutsideClick from "utilities/useOutsideClick";

const FeedLayout = ({ toggleProfileDropdown, open, children }) => {

  const openDropdownRef = useRef();

  useOutsideClick(openDropdownRef, () => {
    if (open) toggleProfileDropdown(false);
  });

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-16">
        <LeftSidebar />
        <div className="w-full lg:w-3/4">
          {/* bg-pink-500 sm:bg-purple-500 md:bg-green-500 lg:border-orange-500 xl:bg-blue-500  */}
          {open && (
          <div className="ease-in-out duration-300 transition fade" ref={openDropdownRef}>
            <ProfileDropDown />
          </div>
        )}
          {children}
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

FeedLayout.propTypes = {
  toggleProfileDropdownHidden: PropTypes.bool,
  toggleProfileDropdown: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  open: state.toggle.open
});

export default connect(mapStateToProps, { toggleProfileDropdown })(FeedLayout);
