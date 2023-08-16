import React, { useState } from "react";
import Chat from './components/Chat';
import MessageHistory from "./components/MessageHistory";
import Render from './components/Render';

function App() {
  const [html, setHtml] = useState("<div>Nothing to render yet!</div>");
  const [messageHistory, setMessageHistory] = useState([]);
  return (
    <div>
      <Chat setMessageHistory={setMessageHistory} setHtml={setHtml}/>
      <MessageHistory messageHistory={messageHistory}/>
      <Render htmlContent={html}/>
    </div>
  );
}

export default App;
