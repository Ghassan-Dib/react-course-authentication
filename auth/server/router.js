import { signup, signin } from "./controllers/authentication.js";
import { jwtLogin } from "./services/passport.js";
import passport from "passport";

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

const myRouter = (app) => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hi: "there" });
  });
  app.post("/signup", signup);
  app.post("/signin", requireSignin, signin);
};

export default myRouter;
