import React, { useRef } from "react";
import PropTypes from "prop-types";

// components
import Navbar from "components/navbar/Navbar";
import ProfileDropDown from "components/navbar/ProfileDropDown";

// redux
import { connect } from "react-redux";
import { toggleProfileDropdown } from "store/actions/toggle.action";

// utilities
import useOutsideClick from "utilities/useOutsideClick";

const MessagesLayout = ({ open, toggleProfileDropdown, children }) => {
  const openDropdownRef = useRef();

  useOutsideClick(openDropdownRef, () => {
    if (open) toggleProfileDropdown(false);
  });

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {open && (
          <div
            className="ease-in-out duration-300 transition fade"
            ref={openDropdownRef}
          >
            <ProfileDropDown />
          </div>
        )}

        {children}
      </div>
    </>
  );
};

MessagesLayout.propTypes = {
  toggleProfileDropdownHidden: PropTypes.bool,
  toggleProfileDropdown: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  open: state.toggle.open,
});

export default connect(mapStateToProps, { toggleProfileDropdown })(
  MessagesLayout
);
