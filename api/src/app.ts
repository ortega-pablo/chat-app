import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/config';
import passport from 'passport';
import routes from './routes/index.routes';

// Initializations
const app = express();

// Settings
app.set('port', config.server.port);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

app.use('/api', routes);

// Routes
app.get('/', (_req, res) => {
  res.send('Welcome to Chat App api !!');
});

export default app;
