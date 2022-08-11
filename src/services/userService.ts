import User from '../models/user';
import { Request, Response } from 'express';
import config from '../config/config';

export default {

  /**Save user 
   * @param req Request
   * @param res Response
  */
  async save(req:Request, res:Response) {
    config.mongoose.connect();
    const user = new User(req.body);
    try {
      await user.save();
      res.json({
        message: 'User created successfully',
        user
      });
    } catch (error:any) {   
      res.status(500).json(error.message || "Server Error");
    }
  },

  /**Finds all users
   * @param req
   * @param res
  */
  async findAll(req:Request, res:Response) {
    config.mongoose.connect();
    try {
      const users = await User.find();
      res.json(users);
    } catch (error:any) {   
      res.status(500).json(error.message || "Server Error");
    }
  },

  /**Finds a user by id
   * @param req
   * @param res
  */
  async findOne(req:Request, res:Response) {
    config.mongoose.connect();
    const user = await User.findById(req.params.id);
    res.json(user);
  },

  /**Updates a user by id
   * @param req.params.id
   * @param req.body
  */
  async update(req:Request, res:Response) {
    config.mongoose.connect();
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(user);
    } catch (error:any) {   
      res.status(500).json(error.message || "Server Error");
    }
  },

  /**Deletes a user by id
   * @param req.params.id
   * @returns user
  */
  async delete(req:Request, res:Response) {
    config.mongoose.connect();
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json({
        message: 'User deleted successfully'
      });
      } catch (error:any) {   
      res.status(500).json(error.message || "Server Error");
    }
  },
}