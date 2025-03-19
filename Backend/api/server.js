//Midleware -> cors

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
const app = express();
const Port = 3001;

app.use(cors());

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

app.get("/artists", async(req, res) => {
  res.send(await db.collection("artists").find({}).toArray())});

app.get("/songs", async(req, res) => {
  res.send(await db.collection("songs").find({}).toArray())});



