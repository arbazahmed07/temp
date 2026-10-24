const express = require("express");
const app = express();

app.use(express.json());

let students = [];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


