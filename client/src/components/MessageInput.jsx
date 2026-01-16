import { useState } from "react";
import socket from "../socket";

export default function MessageInput({ username }) {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("sendMessage", {
      username,
      message: text,
      time: new Date().toLocaleTimeString(),
    });

    setText("");
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        value={text}
        placeholder="Type a message..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button style={styles.button} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: 12,
    borderTop: "1px solid #e5e7eb",
    background: "#ffffff",
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    marginRight: 8,
  },
  button: {
    padding: "0 20px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};
