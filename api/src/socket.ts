import { v4 as uuidv4 } from 'uuid';
import { Server, Socket } from 'socket.io';

const EVENTS = {
  connection: 'connection',
  CLIENT: {
    CREATE_ROOM: 'CREATE_ROOM',
    SEND_ROOM_MESSAGE: 'SEND_ROOM_MESSAGE',
    JOIN_ROOM: 'JOIN_ROOM'
  },
  SERVER: {
    ROOMS: 'ROOMS',
    JOINED_ROOM: 'JOINED_ROOM',
    ROOM_MESSAGE: 'ROOM_MESSAGE'
  }
};

const rooms: Record<string, { name: string }> = {};

function socket({ io }: { io: Server }) {
  console.log(`Sockets enabled`);

  io.on(EVENTS.connection, (socket: Socket) => {
    console.log(`User connected ${socket.id}`);

    socket.emit(EVENTS.SERVER.ROOMS, rooms);

    /*
     * When a user creates a new room
     */
    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName }) => {
      console.log({ roomName });
      // create a roomId
      const roomId = uuidv4();
      // add a new room to the rooms object
      rooms[roomId] = {
        name: roomName
      };

      socket.join(roomId);

      // broadcast an event saying there is a new room
      socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);

      // emit back to the room creator with all the rooms
      socket.emit(EVENTS.SERVER.ROOMS, rooms);
      // emit event back the room creator saying they have joined a room
      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });

    /*
     * When a user sends a room message
     */

    socket.on(
      EVENTS.CLIENT.SEND_ROOM_MESSAGE,
      ({ roomId, message, username }) => {
        const date = new Date();

        socket.to(roomId).emit(EVENTS.SERVER.ROOM_MESSAGE, {
          message,
          username,
          time: `${date.getHours()}:${date.getMinutes()}`
        });
      }
    );

    /*
     * When a user joins a room
     */
    socket.on(EVENTS.CLIENT.JOIN_ROOM, (roomId) => {
      socket.join(roomId);

      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });
  });
}

/* global.onlineUsers = new Map(); */
/* io.on('connection', (socket: Socket) => {
  console.log('Client connected', socket); */
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
/* }); */
export default socket;
