const express = require("express");
const path = require("path");
const app = express();

app.use("/files", express.static(path.join(__dirname, "files")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Yogito OS çalışıyor:", PORT);
});