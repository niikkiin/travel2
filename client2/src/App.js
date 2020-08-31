import React from "react";

// import Navbar from "components/navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Messages from "pages/messages/Messages";
import Login from "pages/auth/Login";
// const Messages = React.lazy(() => import('./OtherComponent'));

function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      {/* routes */}
      <Switch>
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
export default App;
