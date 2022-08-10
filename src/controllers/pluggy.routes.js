import express from 'express';
import pluggyTokenGenerator from '../auth/pluggyTokenGenerator.js';

const app = express.Router();

// Pluggy Api token generator
app.get('/token', (req, res) => {
    const token = pluggyTokenGenerator()
    token.then(result => res.json(result))
})

export default app;