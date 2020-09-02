import React from "react";

import { FeedStaticBoxes } from "components/static-boxes/StaticBoxes";

export const RightSidebar = () => {
  return (
    <div className="hidden lg:block w-1/4 pl-2 pr-12 py-20 fixed right-0">
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
