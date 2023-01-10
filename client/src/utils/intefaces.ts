export interface UserInterface extends Document {
  _id: string;
  userName: string;
  email: string;
  password: string;
  setAvatar: boolean;
  avatarImage: string;
}

export interface MessageInterface extends Document {
  _id: string;
  message: {
    text: string;
  };
  users: string[];
  sender: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessagesInterface extends Document {
  fromSelf: boolean;
  message: string;
}

export interface MessagesResponseInterface extends Document {
  statusOk: boolean;
  projectMessages: MessagesInterface[];
}
