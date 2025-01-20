const express = require("express");
const dotenv = require("dotenv");

// Route files
const bootcamps = require("./routes/bootcamps.js");
//
// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/bootcamps", bootcamps);

app.get("/", (req, res) => res.status(200).send(`<h1>Devcamper API</h1>`));

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port: ${PORT}`,
  ),
);
