/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import app from './app';
import './db';
import { Server } from 'socket.io';
import http from 'http';
import config from './config/config';
import socket from './socket';

const server = http.createServer(app);

const options = {
  cors: {
    origin: config.server.corsOrigin
  }
};

const io = new Server(server, options);

server.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}}`);
  console.log(`Host: http://${config.server.host}:${config.server.port}`);
});
socket({ io });
