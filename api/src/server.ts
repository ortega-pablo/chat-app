/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import app from './app';
import './db';
import { Server, Socket } from 'socket.io';
import http from 'http';
import config from './config/config';

const server = http.createServer(app);

const options = {
  cors: {
    origin: [`${config.server.host}`]
  }
};
const io = new Server(server, options);

/* declare global {
  var onlineUsers: Map<any, any>;
  var chatSocket: any;
} */

/* global.onlineUsers = new Map(); */
io.on('connection', (socket: Socket) => {
  console.log('Client connected', socket);
  //global.chatSocket = socket;

  /* socket.on('data', (data) => {
    console.log('Mensaje recibido desde el cliente: ' + data);
  });
  //socket.on('add-user', (userId) => {
  //  onlineUsers.set(userId, socket.id);
  //});

  //socket.on('send-msg', (data) => {
  //  const sendUserSocket = onlineUsers.get(data.to);
  //  if (sendUserSocket) {
  //    socket.to(sendUserSocket).emit('msg-receive', data.msg);
  //  }
  //});
  socket.on('close', () => {
    console.log('La comunicación ha finalizado');
  });
  socket.on('error', (err) => {
    console.log(err);
  });
  console.log(socket);
  console.log('Un usuario se ha conectado'); */
});

server.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
