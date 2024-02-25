import User from "../models/user.js";
import jwt from "jwt-simple";
import { secret } from "../config.js";

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
};

export const signup = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Add email and password" });
  }

  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(422).send({ error: "Email is in use" });
      }
      const newUser = new User({ email, password });
      return newUser.save();
    })
    .then((newUser) => {
      res.json({ token: tokenForUser(newUser) });
    })
    .catch((err) => {
      return next(err);
    });
};

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};
