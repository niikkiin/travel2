import React from "react";
import { FeedStaticBoxes } from "components/static-boxes/StaticBoxes";

export const LeftSidebar = () => {
  return (
    <div className="w-1/4 pl-12 pr-2 py-20">
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
