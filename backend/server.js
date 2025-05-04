require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const MongoConnection = require("./config/database");
const userRoutes = require("./routes/UserRoutes");
const freelancerRoutes = require("./routes/FreelancerRoutes");
const clientRoutes = require("./routes/ClientRoutes");
const chatRoutes = require("./routes/ChatRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
MongoConnection();

app.listen(port, (err) => {
  if (err) console.log("Server Error :" + err.message);
  else console.log("Server Runnig on Port: " + port);
});
