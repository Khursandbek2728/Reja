console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//Mongo DB connect

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
  // TODO: code with db here
});

app.get("/", function(req, res) {
    res.render("reja");
});

module.exports = app;