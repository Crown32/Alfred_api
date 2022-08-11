import Express from 'express';
import guppyService from '../services/guppyService';

const app = Express();

app.get('/token', (req, res) => {
  guppyService.connectionToken(req, res);
});

export default app;