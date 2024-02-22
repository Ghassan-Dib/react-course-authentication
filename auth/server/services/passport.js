import passport from "passport";
import User from "../models/user.js";
import { secret } from "../config.js";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import LocalStrategy from "passport-local";

const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }).then((err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    if (user.passowrd === password) {
      return done(null, true);
    }
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secret,
};

export const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch((err) => {
      done(err, false);
    });
});

passport.use(jwtLogin);
