import React from "react";

// import Navbar from "components/navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Login from "pages/site/auth/Login";
import SignUp from "pages/site/auth/SignUp";
import Messages from "pages/site/messages/Messages";
import Feed from "pages/site/feed/Feed";
import Like from "pages/site/likes/Like";
// const Messages = React.lazy(() => import('./OtherComponent'));

// routes
import FeedRoutes from "routes/FeedRoutes";
import MessagesRoutes from "routes/MessagesRoutes";

// redux
import { Provider } from 'react-redux';
import store from "store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* routes */}
        <Switch>
          <MessagesRoutes exact path="/messages" component={Messages} />
          <FeedRoutes exact path="/feed" component={Feed} />
          <FeedRoutes exact path="/likes" component={Like} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
