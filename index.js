const express = require("express");

const app = express();

app.arguments(express.json());

app.get("/payment", (req, res) => {
  res.send({
    message: "payment success",
  });
});

app.listen(5000, () => console.log("server 5000 🚀"));
