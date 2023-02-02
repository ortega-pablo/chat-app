export const host = import.meta.env.VITE_BASE_URL;

export const registerRoute = `${host}/api/auth/signup`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/user/setAvatar`;
export const decryptTokenRoute = `${host}/api/auth/decryptToken`;
export const getAllUsersRoute = `${host}/api/user/allUsers`;
export const currentUserRoute = `${host}/api/user`;
export const sendMessageRoute = `${host}/api/message/add`;
export const getMessagesRoute = `${host}/api/message`;
export const changePass = `${host}/api/user/changePass`;
