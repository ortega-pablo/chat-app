import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config/config'


// Initializations
const app = express()

// Settings
app.set('port', config.server.port)

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.get('/', (_req, res) => {
    res.send('Bienvenido a Chat App !!')
})

export default app
