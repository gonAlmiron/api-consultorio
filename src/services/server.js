import express from 'express';
import cors from 'cors'
import MongoStore from 'connect-mongo';
import Config from '../config';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import logger from '../logs/logger';
import morgan from 'morgan';
import mainRouter from '../routes/index'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors())
app.use("/api", mainRouter);



// MIDDLEWARE DE ERRORES
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({
      error: 'an error occurred',
      msg: err.stack
    });
  });


export default app