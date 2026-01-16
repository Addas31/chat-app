import { useState } from "react";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import "./styles/theme.css";

function App() {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);

  return joined ? (
    <Chat username={username} />
  ) : (
    <Login
      username={username}
      setUsername={setUsername}
      onJoin={() => setJoined(true)}
    />
  );
}

export default App;
