export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Chat App</h3>
      <p style={styles.sub}>Online users</p>
    </div>
  );
}

const styles = {
  sidebar: {
    width: 240,
    background: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    padding: 16,
  },
  title: {
    marginBottom: 8,
    color: "#4f46e5",
  },
  sub: {
    color: "#6b7280",
    fontSize: 14,
  },
};
