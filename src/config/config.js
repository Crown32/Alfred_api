import * as dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import pluggyRoutes from '../controllers/pluggy.routes.js';
import userRoutes from '../controllers/user.routes.js';
import mongoose from 'mongoose';

dotenv.config();

export default {
    expressConfig(app) {
        // adding Helmet to enhance your Rest API's security
        app.use(helmet());

        // using bodyParser to parse JSON bodies into JS objects
        app.use(bodyParser.json());

        // enabling CORS for all requests
        app.use(cors());

        // adding morgan to log HTTP requests
        app.use(morgan('dev'));

        //Adding routers
        app.use('/pluggy', pluggyRoutes);
        app.use('/user', userRoutes);
    },
    mongoConfigLocal() {
        // connect to mongoDB database
        mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true });
    }
}