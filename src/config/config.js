import * as dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '../controllers/routes.js';

dotenv.config();

export function expressConfig(app) {
    // adding Helmet to enhance your Rest API's security
    app.use(helmet());

    // using bodyParser to parse JSON bodies into JS objects
    app.use(bodyParser.json());

    // enabling CORS for all requests
    app.use(cors());

    // adding morgan to log HTTP requests
    app.use(morgan('dev'));

    //Adding routes from routes.js
    app.use('/', routes);
}