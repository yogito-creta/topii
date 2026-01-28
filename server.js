const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: "files/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + ".zip");
  }
});

const upload = multer({ storage });

app.use("/files", express.static(path.join(__dirname, "files")));

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/admin", (req,res)=>{
  res.sendFile(path.join(__dirname,"admin.html"));
});

app.post("/upload", upload.any(), (req,res)=>{
  res.send("Dosyalar yüklendi lan 😎 <br><a href='/'>Geri dön</a>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("TPI Official çalışıyor"));