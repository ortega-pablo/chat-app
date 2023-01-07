const host = import.meta.env.VITE_BASE_URL;

export const registerRoute = `${host}/api/auth/signup`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/user/setAvatar`;
export const decryptTokenRoute = `${host}/api/auth/decryptToken`;
export const getAllUsersRoute = `${host}/api/user`;
