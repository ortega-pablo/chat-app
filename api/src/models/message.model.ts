import mongoose, { model, Schema } from 'mongoose';

const messageSchema = new Schema(
  {
    message: {
      text: {
        type: String,
        required: true
      }
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model('Message', messageSchema);
