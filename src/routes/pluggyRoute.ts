import Express from 'express';
import guppyService from '../services/pluggyService';

const app = Express();

app.get('/token', (req, res) => {
  guppyService.connectionToken(req, res);
});

app.get('/connectors', (req, res) => {
  guppyService.fetchConnectors(req, res);
});

app.post('/items', (req, res) => {
  guppyService.createItem(req, res);
});

app.post('/validateMFA', (req, res) => {
  guppyService.validateMFA(req, res);
});

app.delete('/items/:id', (req, res) => {
  guppyService.deleteItem(req, res);
});

export default app;