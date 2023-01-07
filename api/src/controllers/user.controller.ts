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
      return res.status(400).json({
        message: 'Por favor introducir nombre de usuario, email y contraseña.',
        statusOk: false
      });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({ message: 'El usuario ya existe', statusOk: false });
    }

    const newUser = new User({
      userName,
      email,
      password
    });
    await newUser.save();
    const resUser = {
      message: 'Usuario creado exitosamente',
      token: createToken(newUser),
      statusOk: true
    };
    return res.status(201).json(resUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, statusOk: false });
    }
    return res
      .status(500)
      .json({ message: 'Error en el Servidor.', statusOk: false });
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
        statusOk: true
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

export const decryptToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const headerToken = req.header('Authorization');
    console.log(headerToken);
    if (!headerToken) {
      console.log('Token no enviado');
      return res.status(400).json({
        message: 'Token incorrecto.',
        statusOk: false
      });
    }
    const token = headerToken
      .replace('Bearer ', '')
      .slice(0, headerToken.length - 1);
    console.log('Este es el token', token);
    try {
      const user = jwt.verify(token, config.jwtSecret);
      return res.status(200).json({
        message: 'Usuario encontrado correctamente.',
        statusOk: true,
        user
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Token incorrecto.',
        statusOk: false
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, statusOk: false });
    }
    return res
      .status(500)
      .json({ message: 'Error en el Servidor', statusOk: false });
  }
};

export const setAvatar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.userId;
    const { setAvatar, avatarImage } = req.body;
    if (!id) {
      console.log('ID no enviado');
      return res.status(400).json({
        message: 'Token incorrecto.',
        statusOk: false
      });
    }
    try {
      await User.findByIdAndUpdate(id, {
        setAvatar,
        avatarImage
      });
      return res.status(200).json({
        message: 'Avatar seteado correctamente.',
        statusOk: true
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Error al setear avatar',
        statusOk: false
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, statusOk: false });
    }
    return res
      .status(500)
      .json({ message: 'Error en el Servidor', statusOk: false });
  }
};
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const currentUser = req.params.userId;
    const users = await User.find({ _id: { $ne: currentUser } }).select([
      '_id',
      'username',
      'email',
      'avatarImage'
    ]);
    return res.status(200).json({
      message: 'Usuarios encontrados:',
      statusOk: true,
      users
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, statusOk: false });
    }
    return res
      .status(500)
      .json({ message: 'Error en el Servidor', statusOk: false });
  }
};
