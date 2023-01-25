//import { v4 as uuidv4 } from 'uuid';
import { Server, Socket } from 'socket.io';

const EVENTS = {
  connection: 'connection',
  ADD_USER: 'add-user',
  SEND: 'send-message',
  RECEIVE: 'msg-receive'
};

const onlineUsers: Map<string, string> = new Map();

function socket({ io }: { io: Server }) {
  console.log(`Sockets enabled`);

  io.on(EVENTS.connection, (socket: Socket) => {
    console.log(`⚡⚡ User with id ${socket.id} just connected! ⚡⚡`);

    socket.on(EVENTS.ADD_USER, (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on(EVENTS.SEND, (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit(EVENTS.RECEIVE, data.message);
      }
    });

    socket.on('error', (err) => {
      console.log(err);
    });
  });
}

export default socket;
