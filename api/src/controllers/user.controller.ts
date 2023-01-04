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

export const logIn = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: 'Usuario no encontrado', statusOk: false });
    }
    const isMatch = await user.comparePassword(password);
    if (isMatch) {
      const resUser = {
        message: 'Login realizado con éxito',
        token: createToken(user),
        status: true
      };
      return res.status(200).json(resUser);
    }
    return res
      .status(400)
      .json({ message: 'Email o contraseña incorrecto', statusOk: false });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, statusOk: false });
    }
    return res
      .status(500)
      .json({ message: 'Error en el Servidor', statusOk: false });
  }
};
