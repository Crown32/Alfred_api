import { PluggyClient } from 'pluggy-sdk'
import { Request, Response } from 'express';
import config from '../config/config';

export default{
  connectionToken(req:Request, res:Response){
    const client = new PluggyClient({
      clientId: config.env.PLUGGY_CLIENT_ID,
      clientSecret: config.env.PLUGGY_CLIENT_SECRET,
    });
    client.createConnectToken().then(token => {
      res.json(token);
    });
    
  },

  fetchConnectors(req:Request, res:Response){
    const client = new PluggyClient({
      clientId: config.env.PLUGGY_CLIENT_ID,
      clientSecret: config.env.PLUGGY_CLIENT_SECRET,
    });
    client.fetchConnectors().then(connectors => {
    res.json(connectors);
    });
  },

  createItem(req:Request, res:Response){
    const client = new PluggyClient({
      clientId: config.env.PLUGGY_CLIENT_ID,
      clientSecret: config.env.PLUGGY_CLIENT_SECRET,
    });
    client.createItem(req.body.connectorId,req.body.credentials).then(item => {
      res.json(item);
    });
  },

  validateMFA(req:Request, res:Response){
    const client = new PluggyClient({
      clientId: config.env.PLUGGY_CLIENT_ID,
      clientSecret: config.env.PLUGGY_CLIENT_SECRET,
    });
    client.updateItemMFA(req.body.itemId,req.body.mfa).then(item => {
    res.json(item);
    });
  },

  deleteItem(req:Request, res:Response){
    const client = new PluggyClient({
      clientId: config.env.PLUGGY_CLIENT_ID,
      clientSecret: config.env.PLUGGY_CLIENT_SECRET,
    });
    client.deleteItem(req.params.id).then(() => {
    res.json("deleted");
    });
  }
}