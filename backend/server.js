const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
