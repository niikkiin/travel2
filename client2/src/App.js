import React from "react";

import MessagePanel from "components/messages/MessagePanel";
import SendMessage from "components/messages/SendMessage";

function App() {
  return (
    <div class="container mx-auto mt-6 w-2/4">
      <MessagePanel />
      <SendMessage />
    </div>
  );
}
export default App;
