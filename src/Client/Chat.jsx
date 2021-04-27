import React, { useEffect, useState } from "react";

export function Chat(props) {
  const [chatLog, setChatLog] = useState([]);
  const [msg, setMsg] = useState("");
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = new WebSocket("ws://" + window.location.host);
    socket.open = (event) => {
      console.log("open", event);
    };

    socket.onmessage = (event) => {
      console.log("msg", event);
      setChatLog((chatLog) => [...chatLog, event.data]);
    };

    socket.onclose = (event) => {
      console.log("close", event);
    };

    setSocket(socket);
  }, []);

  function handleSubmitMsg(e) {
    e.preventDefault();
    socket.send(props.username + ": " + " " + msg);
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
