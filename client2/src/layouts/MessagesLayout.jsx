import React from "react";
import Navbar from "components/navbar/Navbar";

const MessagesLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};
export default MessagesLayout;
