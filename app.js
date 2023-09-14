// Щоб запустити цей локальний сервер потрібно в терміналі написати => npm start
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const router = express.Router();
const Model = require("./models/contact");
const db =
  "mongodb+srv://arysich:oBe3d0ukBZX2xOyC@cluster0.plp6laf.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());
app.use("", router);
app.listen(3000, () => console.log(`Server Started at ${3000}`));

mongoose
  .connect(db)
  .then(() => console.log("conneсt"))
  .catch((err) => console.log(err));

router.post("/contact", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    phone: req.body.phone,
    message: req.body.message,
  });

  try {
    const saved = await data.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/requests", async (_, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
