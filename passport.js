import passport from "passport";
import GithubStrategy from "passport-github";
import {
  githubLoginCallback
} from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());
passport.use(new GithubStrategy({
  clientID: process.env.GH_ID,
  clientSecret: process.env.GH_SECRET,
  callbackURL: `http://localhost:${process.env.PORT}${routes.githubCallback}`
}, githubLoginCallback));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());