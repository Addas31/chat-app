import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";
import MessageBubble from "../components/MessageBubble";
import socket from "../socket";
import { useEffect, useRef, useState } from "react";

export default function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit("join", username);

    socket.on("messageHistory", (data) => setMessages(data));
    socket.on("receiveMessage", (data) =>
      setMessages((prev) => [...prev, data])
    );

    return () => socket.off();
  }, [username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.chatArea}>
        <ChatHeader />
        <div style={styles.messages}>
          {messages.map((msg, i) => (
            <MessageBubble
              key={i}
              message={msg}
              self={msg.username === username}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <MessageInput username={username} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  chatArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "#f9fafb",
  },
  messages: {
    flex: 1,
    padding: 16,
    overflowY: "auto",
  },
};
