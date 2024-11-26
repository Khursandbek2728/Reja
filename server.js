console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

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
  console.log(req.body);
  res.json({test: "succes"});
});

app.get("/", function(req, res) {
    res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});