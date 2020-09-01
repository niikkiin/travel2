import React from "react";
import Navbar from "components/navbar/Navbar";

const MessagesLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16">{children}</div>
    </>
  );
};
export default MessagesLayout;
