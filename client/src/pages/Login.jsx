export default function Login({ onJoin, username, setUsername }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome to Chat</h2>
        <p style={styles.sub}>Enter your name to continue</p>

        <input
          style={styles.input}
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          style={{
            ...styles.button,
            opacity: username ? 1 : 0.5,
          }}
          disabled={!username}
          onClick={onJoin}
        >
          Join Chat
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 360,
    background: "#fff",
    padding: 24,
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  sub: {
    color: "#6b7280",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};
