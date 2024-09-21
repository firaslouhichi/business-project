import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
  const authToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return authToken;
};
