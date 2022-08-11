import Express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import route from '../routes/route';
import mongoose from 'mongoose';
import {ConnectOptions} from 'mongoose';

dotenv.config();

export default {
  env: {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/test',
  },
  express: {
    config(app: Express.Application) {
      app.use(bodyParser.json());
      app.use(helmet());
      app.use(cors());
      app.use(morgan('dev'));
      app.use('/user', route);
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
