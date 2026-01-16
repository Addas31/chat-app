export default function MessageBubble({ message, self }) {
  return (
    <div
      style={{
        ...styles.bubble,
        alignSelf: self ? "flex-end" : "flex-start",
        background: self ? "#4f46e5" : "#e5e7eb",
        color: self ? "#fff" : "#111827",
      }}
    >
      <strong>{message.username}</strong>
      <div>{message.message}</div>
      <span style={styles.time}>{message.time}</span>
    </div>
  );
}

const styles = {
  bubble: {
    maxWidth: "65%",
    padding: "10px 14px",
    borderRadius: 12,
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
  },
  time: {
    fontSize: 10,
    opacity: 0.7,
    marginTop: 4,
    alignSelf: "flex-end",
  },
};
