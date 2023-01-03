import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import User, { UserInterface } from '../models/user.model';

function createToken(user: UserInterface) {
  return jwt.sign(
    { id: user.id, email: user.email, userName: user.userName },
    config.jwtSecret,
    {
      expiresIn: 86400
    }
  );
}

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
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
    const resUser = {
      message: 'User created successfully',
      token: createToken(newUser)
    };
    return res.status(201).json(resUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal Server error.' });
  }
};

export const signIn = (_req: Request, res: Response) => {
  res.send('signIn');
};
