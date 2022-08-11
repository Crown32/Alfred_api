import { model, Schema} from 'mongoose';
import IUser from '../@types/user';

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  guppyItens: [{
    type: String,
    required: false,
  }],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<IUser>('User', UserSchema);