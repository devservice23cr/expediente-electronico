import {sign, decode, verify} from 'jsonwebtoken';

export const tokenSign = async (user:any) => {
  return sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET || "",
    {
      expiresIn: "2d",
    }
  );
};

export const verifyToken = async (token:any) => {
  try {
    return verify(token, process.env.JWT_SECRET || "");
  } catch (e) {
    return null;
  }
};

export const decodeSign = (token:any) => {
  return decode(token, {});
};

