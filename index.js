import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const port = 5000;

//use json data
app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello Kavindu Praneeth.");
});

app.listen(port, () => {
  console.log(`server is running on port:http://localhost:${port}`);
});
