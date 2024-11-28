console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//MongoDB chaqirish
const db = require("./server").db();
//const mongodb = require("connect-livereload");

// 1:Kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session codelari
// 3: Views codelari
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codelari
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.get("/", function(req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      console.log(data);
      res.render("reja", {items: data });
    }
  });
});

module.exports = app;