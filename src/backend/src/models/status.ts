import mongoose from 'mongoose';

const StatusSchema = new mongoose.Schema({
  _id: String,
  status: String,
  description: String,
});

const Status = mongoose.model('status', StatusSchema, 'Status');

export default Status;
