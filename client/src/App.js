import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./chat";

const socket = io.connect("http://localhost:5001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat"
            element={<Chat username={username} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
