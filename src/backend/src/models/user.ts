import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  _id: String,
  accessToken: String,
  ownedItems: [String],
});

const Users = mongoose.model('users', UsersSchema, 'Users');

export default Users;
