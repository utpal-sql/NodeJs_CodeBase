// Create One application using express server

const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8080;

//http  -get - read, post-insert/add, put -update, delete-delete
app.get("/", function (req, res) {
  res.send("Hello Everyone 🥳🥳🥳");
});