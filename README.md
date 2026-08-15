# 💬 Real-Time Chat Application

A modern, real-time chat application built using React, Node.js, and Socket.IO that enables instant communication between multiple users across different devices.

---

## 🌐 Live Demo  
🔗 [https://696cee52549c29f7fdd4ccf6--fantastic-crepe-e82072.netlify.app/](https://fantastic-crepe-e82072.netlify.app/)
🔗 

---

## 🧑‍💻 GitHub Repository  
🔗 https://github.com/Addas31/chat-app

---

## 🚀 Features

- 🔴 Real-time messaging using WebSockets (Socket.IO)  
- 👤 Username-based login  
- 💬 Instant message broadcast to all connected users  
- 🕒 Message timestamps  
- 🎨 Modern, responsive UI with clean padding, alignment, and colors  
- 📱 Works across multiple tabs and devices (same network)  
- ⚡ Fast frontend powered by Vite + React  

---

## 🛠️ Tech Stack

### Frontend
- React  
- Vite  
- CSS (custom modern styling)  
- Socket.IO Client  

### Backend
- Node.js  
- Express.js  
- Socket.IO  
- CORS  

---

## 📂 Project Structure

```
chat_app
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Chat.jsx
│   │   │   └── Message.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── socket.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ▶️ How to Run the Project Locally

### Backend Setup
```
cd server
npm install
node server.js
```

Backend runs on:
```
http://localhost:5000
```

---

### Frontend Setup
```
cd client
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🌐 Multi-Device Testing

To access the app from another laptop or mobile:

```
npm run dev -- --host
```

- Ensure all devices are on the same Wi-Fi network  
- Open the Network URL shown in the terminal on other devices  

---

## 🧠 How It Works

- The frontend establishes a persistent WebSocket connection with the backend.  
- When a user sends a message, it is emitted to the server.  
- The server broadcasts the message to all connected clients instantly.  
- This enables real-time communication without page refresh.  

---

## 🎯 Project Purpose

This project demonstrates:

- Real-time communication using WebSockets  
- Full-stack development using modern technologies  
- Clean and responsive UI design  
- Practical implementation suitable for internships and academic projects  

---

## 📌 Future Enhancements

- 👥 Online users list  
- 🧩 Chat rooms  
- 🗄️ MongoDB database integration  
- 🔐 Authentication system  
- ☁️ Cloud deployment  

---

## 👨‍💻 Author

**Aliva Dipali Das**  
GitHub: https://github.com/Addas31  

---

## ⭐ Show Some Love

If you like this project, please give it a ⭐ on GitHub  
It motivates me to build more!
