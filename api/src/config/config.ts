export default {
  jwtSecret: process.env.JWT_SECRET || 'palabrasecreta',
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ChatApp',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5173,
    host: process.env.DB_HOST?.toString() || 'localhost'
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST?.toString() || 'localhost'
  }
};
