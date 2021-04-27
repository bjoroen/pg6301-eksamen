import React, { useState } from "react";

export function Chat() {
  const [chatLog, setChatLog] = useState([]);
  const [msg, setMsg] = useState("");

  function handleSubmitMsg(e) {
    e.preventDefault();
    setChatLog([...chatLog, msg]);
    setMsg("");
  }

  return (
    <div id="chat">
      <div id="container-chat">
        <header>
          <h1>Best Chat app ever!</h1>
        </header>
        <main>
          <div id="chatlog">
            {chatLog.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </div>
        </main>
        <footer>
          <form onSubmit={handleSubmitMsg}>
            <input
              type="text"
              autoFocus={true}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <button>Chat</button>
          </form>
        </footer>
      </div>
    </div>
  );
}
