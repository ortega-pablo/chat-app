//import { v4 as uuidv4 } from 'uuid';
import { Server, Socket } from 'socket.io';

const EVENTS = {
  connection: 'connection',
  ADD_USER: 'add-user',
  SEND_MESSAGE: 'add-user',
  RECEIVE: 'msg-receive'
};

function socket({ io }: { io: Server }) {
  console.log(`Sockets enabled`);

  io.on(EVENTS.connection, (socket: Socket) => {
    console.log(`User connected ${socket.id}`);
    console.log(`⚡: ${socket.id} user just connected!`);

    // socket.on(EVENTS.ADD_USER, (userId) => {
    //onlineUsers.set(userId, socket.id);
    // });

    /*
     * When a user joins a room
     */
    /*  socket.on(EVENTS.CLIENT.JOIN_ROOM, (roomId) => {
      socket.join(roomId);

      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    }); */

    socket.on('error', (err) => {
      console.log(err);
    });
  });
}

//socket.on('add-user', (userId) => {
//  onlineUsers.set(userId, socket.id);
//});

//socket.on('send-msg', (data) => {
//  const sendUserSocket = onlineUsers.get(data.to);
//  if (sendUserSocket) {
//    socket.to(sendUserSocket).emit('msg-receive', data.msg);
//  }
//});

export default socket;
