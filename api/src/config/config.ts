import dotenv from 'dotenv';

dotenv.config();

export default {
  jwtSecret: process.env.JWT_SECRET || 'palabrasecreta',
  DB: {
    URI: process.env.MONGODB_URI || '',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD
  },
  server: {
    port: Number(process.env.PORT) || 3000
  },
  client: {
    host: process.env.CLIENT_HOST
  }
};
