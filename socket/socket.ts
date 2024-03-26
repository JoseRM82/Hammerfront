import { Socket, io } from "socket.io-client";

let socket: Socket

export const connectSocket = () => {
  if(socket) return socket

  socket = io('http://localhost:5000/')
  return socket
}