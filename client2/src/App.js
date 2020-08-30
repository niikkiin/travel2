import React from "react";

import Navbar from "components/navbar/Navbar";

import { BrowserRouter as Router} from 'react-router-dom';

// pages
import Messages from "pages/messages/Messages";

function App() {
  return (
    <Router>
      <Navbar />
      <Messages />
    </Router>
  );
}
export default App;
