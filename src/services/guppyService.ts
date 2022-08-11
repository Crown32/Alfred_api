import { PluggyClient } from 'pluggy-sdk'
import { Request, Response } from 'express';
import config from '../config/config';

export default{
  async connectionToken(req:Request, res:Response){
    const client = new PluggyClient({
      clientId: config.env.GUPPY_CLIENT_ID,
      clientSecret: config.env.GUPPY_CLIENT_SECRET,
    });
    const accessToken = await client.createConnectToken();
    res.json(accessToken);
  },
}