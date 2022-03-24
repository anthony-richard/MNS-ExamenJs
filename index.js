// init express et bdd
let express = require("express");
let app = express();
app.use(require("express").json());

const data = require("./src/bdd.js") ;

// const variable
const PORT = 3000;

// mise en place des routes
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/index.html`);
});

app.get("/add", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/add.html`);
});

app.get("/edit/:name", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/edit.html`);
});

app.get("/delete", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/delete.html`);
});

app.get("/personnageView/:id", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/personnageView.html`);
});

// route de données

// mise à jour d'un personnage
app.put("/personnage/:id", (req, res) => {
  let id = req.params.id;
  data.forEach((element, index) => {
    if (element.id == id) {
      data[index] = req.body;
      res.send(data[index]);
    }
  });
});

// suppression d'un personnage
app.delete("/personnage/:id", (req, res) => {
  const indexElem = data.findIndex((elem) => elem.id == req.params.id);
  if (indexElem === -1) return res.status(404).send("élément inexistant");
  data.splice(indexElem, 1);
  res.send(data);
});

//  lire les personnages
app.get("/personnage", (req, res) => {
  res.send(data);
});

// lire un personnage
app.get("/personnage/:id", (req, res) => {
  let id = req.params.id;
  data.forEach((element) => {
    if (element.id == id) res.send(element);
  });
});

// création d'un personnage
app.post("/personnage", (req, res) => {
  let localData = req.body;
  localData.id = data.length + 1;
  data.push(localData);
  res.send(data);
});

// arborescence 
app.use("/public", express.static("./public"));

// démarrage du serveur
app.listen(3000, () => {
  console.log(`Le serveur est ouvert sur le port ${PORT}`);
});
