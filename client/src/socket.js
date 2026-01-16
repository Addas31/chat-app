import { io } from "socket.io-client";

const socket = io("https://chat-backend-5ld2.onrender.com");

export default socket;
