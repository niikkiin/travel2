import React from "react";
import { Route } from "react-router-dom";

import MessagesLayout from "layouts/MessagesLayout";

const MessagesRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MessagesLayout>
          <Component {...props} />
        </MessagesLayout>
      )}
    />
  );
};

export default MessagesRoutes;
