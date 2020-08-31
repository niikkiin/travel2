import React from "react";

import Navbar from "components/navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Messages from "pages/messages/Messages";

function App() {
  return (
    <Router>
      <Navbar />

      {/* routes */}
      <Switch>
        <Route exact path="/messages" component={Messages} />
      </Switch>
    </Router>
  );
}
export default App;
