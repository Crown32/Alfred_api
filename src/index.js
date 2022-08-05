import express from 'express';
import { expressConfig } from './config/config.js';

const app = express();
expressConfig(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});