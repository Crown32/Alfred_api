import Express from 'express';
import config from './config/config';

const app = config.express.config(Express());

app.listen(config.env.PORT, () => {
  console.log(`Server is running on port ${config.env.PORT}`);
});
