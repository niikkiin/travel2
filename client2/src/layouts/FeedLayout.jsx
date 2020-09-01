import React from "react";
import Navbar from "components/navbar/Navbar";
import { RightSidebar } from "components/sidebar/RightSidebar";
import { LeftSidebar } from "components/sidebar/LeftSidebar";

const FeedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-16">
        <LeftSidebar />
        <div className="w-2/4">{children}</div>
        <RightSidebar />
      </div>
    </>
  );
};
export default FeedLayout;
