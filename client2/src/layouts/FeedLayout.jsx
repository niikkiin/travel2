import React from "react";
import Navbar from "components/navbar/Navbar";

const FeedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default FeedLayout;
