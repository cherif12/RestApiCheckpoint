const express = require("express");
const app = express();



const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./config/.env" });

port = process.env.port;
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => console.log("db is connected"));

app.use(express.json());

const usersRouter = require("./routes/userRouters");
app.use("/users", usersRouter);

app.listen(port, () => console.log(`the server started on port ${port}`));
