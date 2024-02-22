import { signup } from "./controllers/authentication.js";
import { jwtLogin } from "./services/passport.js";
import passport from "passport";

const requireAuth = passport.authenticate("jwt", { session: false });

const myRouter = (app) => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hi: "there" });
  });
  app.post("/signup", signup);
};

export default myRouter;
