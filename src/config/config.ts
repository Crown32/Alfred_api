import Express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import userRoute from '../routes/userRoute';
import pluggyRoute from '../routes/pluggyRoute';
import mongoose from 'mongoose';
import {ConnectOptions} from 'mongoose';

dotenv.config();

export default {
  env: {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.MONGO_URI || (()=>{throw new Error('env variable MONGO_URI is not defined')})(),
    PLUGGY_CLIENT_ID: process.env.PLUGGY_CLIENT_ID || (()=>{throw new Error('env variable PLUGGY_CLIENT_ID is not defined')})(),
    PLUGGY_CLIENT_SECRET: process.env.PLUGGY_CLIENT_SECRET || (()=>{throw new Error('env variable PLUGGY_CLIENT_SECRET is not defined')})(),
  },
  express: {
    config(app: Express.Application) {
      app.use(bodyParser.json());
      app.use(helmet());
      app.use(cors());
      app.use(morgan('dev'));
      app.use('/user', userRoute);
      app.use('/PLUGGY', pluggyRoute);
      return app;
    },
  },
  mongoose: {
    connect() {
      mongoose.Promise = global.Promise;
      mongoose.connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions);
    },
  },

};
