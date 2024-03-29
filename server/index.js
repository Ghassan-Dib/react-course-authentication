import bodyParser from "body-parser";
import express from "express";
import http from "http";
import morgan from "morgan";
import router from "./router.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// DB setup
mongoose.connect("mongodb://localhost/auth");

// App setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" })); // parse every request to json
router(app);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`server listening to ${port}`);
