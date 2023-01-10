import { Request, Response } from 'express';
import Message from '../models/message.model';

export const addMessage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { from, to, message } = req.body;
    const data = await Message.create({
      message: { text: message },
      users: [from, to],
      sender: from
    });
    if (data)
      return res
        .status(200)
        .json({ statusOk: true, message: 'Mensaje guardado correctamente.' });
    return res
      .status(400)
      .json({ statusOk: false, message: 'Error al guardar el mensaje.' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, statusOk: false });
    }
    return res
      .status(500)
      .json({ message: 'Error en el Servidor', statusOk: false });
  }
};

export const getMessages = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { from, to } = req.body;
    const messages = await Message.find({
      users: {
        $all: [from, to]
      }
    }).sort({ updatedAt: 1 });
    const projectMessages = messages.map((message) => {
      return {
        fromSelf: message.sender.toString() === from,
        message: message.message?.text
      };
    });
    return res.status(200).json({ statusOk: true, projectMessages });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, statusOk: false });
    }
    return res
      .status(500)
      .json({ message: 'Error en el Servidor', statusOk: false });
  }
};
