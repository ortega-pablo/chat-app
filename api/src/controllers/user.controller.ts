import { Request, Response } from 'express';
import User from '../models/user.model';

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Please, send your user name, email and password.' });
  }
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json({ msg: 'The User already Exists' });
  }

  const newUser = new User({
    userName,
    email,
    password
  });
  await newUser.save();
  return res.status(201).json(newUser);
};

export const signIn = (_req: Request, res: Response) => {
  res.send('signIn');
};
