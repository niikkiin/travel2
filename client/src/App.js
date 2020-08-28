import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MessagesPage from 'pages/messages-page/Messages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to='/messages' component={MessagesPage} />
      </Switch>
    </Router>
  );
}

export default App;
