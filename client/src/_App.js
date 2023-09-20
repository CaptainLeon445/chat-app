import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5001/");
const user = "User " + parseInt(Math.random() * 10);

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", (payload) => {
      setChat([...chat, payload]);
    });
  });

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { user, message });
    setMessage("");
  };
  return (
    <div className="App">
      <h2>Hello, Welcome to my chat app</h2>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send Message"
          required
        />
        <button type="submit">Send</button>
      </form>

      {chat.map((payload, index)=>{
        return <h2>User: {payload.user} <span>{payload.message}</span></h2>
      })}
    </div>
  );
}

export default App;
