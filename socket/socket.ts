import { Socket, io } from "socket.io-client";

let socket: Socket

export const connectSocket = () => {
  if(socket) return socket

  socket = io('https://hammer-backend.onrender.com/api/')
  return socket
}