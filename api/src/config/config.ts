export default {
  jwtSecret: process.env.JWT_SECRET || 'palabrasecreta',
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ChatApp',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST?.toString() || 'localhost',
    corsOrigin: `http://localhost:${process.env.PORT || 3000}`
  }
};
