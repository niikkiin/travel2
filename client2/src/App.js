import React from "react";

// import Navbar from "components/navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Messages from "pages/site/messages/Messages";
import Login from "pages/site/auth/Login";
// const Messages = React.lazy(() => import('./OtherComponent'));

// routes
import FeedRoutes from "routes/FeedRoutes";
import Feed from "pages/site/feed/Feed";
import Like from "pages/site/likes/Like";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      {/* routes */}
      <Switch>
        <FeedRoutes exact path="/messages" component={Messages} />
        <FeedRoutes exact path="/feed" component={Feed} />
        <FeedRoutes exact path="/likes" component={Like} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}
export default App;
