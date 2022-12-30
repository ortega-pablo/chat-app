import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserInterface extends Document {
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

// Hasheo la contraseña antes de guardar en DB
userSchema.pre<UserInterface>('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;

  return next();
});

// Comparo la contraseña con una guardada
userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<UserInterface>('User', userSchema);