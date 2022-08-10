import express from 'express';
import service from '../service/userService.js';

const app = express.Router();

app.post('/', (req, res) => {
    service.createUser(req, res);
})

export default app;