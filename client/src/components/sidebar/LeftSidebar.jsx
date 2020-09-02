import React from "react";
import { FeedStaticBoxes } from "components/static-boxes/StaticBoxes";

export const LeftSidebar = () => {
  return (
    <div className="hidden md:block w-1/4 pl-12 pr-2 py-20 fixed left-0">
      <div className="my-4">
        <FeedStaticBoxes />
      </div>
      <div className="my-4">
        <FeedStaticBoxes />
      </div>
      <div className="my-4">
        <FeedStaticBoxes />
      </div>
      <div className="my-4">
        <FeedStaticBoxes />
      </div>
    </div>
  );
};
