const express = require("express");
const app = express();
const PORT = 8080;


app.get("/", (req, res) => {
  res.send("Hello DevOps World!");
});


app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    message: "Service is running",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
