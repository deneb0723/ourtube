import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListen = () =>
  console.log(`Listening on : https://localhost:${PORT}`);

app.use(cookieParser());
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => res.send("Home"));
app.get("/profile", (req, res) => res.send("Profile"));

app.listen(4000, handleListen);
