import React from "react";
import { Route } from "react-router-dom";

import ProfileLayout from "layouts/ProfileLayout";

const ProfileRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <ProfileLayout>
          <Component {...props} />
        </ProfileLayout>
      )}
    />
  );
};

export default ProfileRoutes;
