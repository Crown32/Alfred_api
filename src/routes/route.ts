import Express from 'express';
import config from '../config/config';
import userService from '../services/userService';

const app = Express();

app.get('/', (req, res) => {
  userService.findAll(req, res);
});

app.post('/', (req, res) => {
  userService.save(req, res);
});

app.put('/:id', (req, res) => {
  userService.update(req, res);
});

app.delete('/:id', (req, res) => {
  userService.delete(req, res);
});

export default app;