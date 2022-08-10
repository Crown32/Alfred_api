import express from 'express';
import config from './config/config.js';

const app = express();
config.expressConfig(app);
config.mongoConfigLocal();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});