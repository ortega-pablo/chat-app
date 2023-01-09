export interface UserInterface extends Document {
  _id: string;
  userName: string;
  email: string;
  password: string;
  setAvatar: boolean;
  avatarImage: string;
}
