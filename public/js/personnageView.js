import {getPersonnage} from "./module/optionsFunction.js"

let decomposeUrl = window.location.href.split("/");
let id = decomposeUrl[decomposeUrl.length - 1];

// selection des balises avec les id suivants
let title = document.querySelector("#title");
let description = document.querySelector("#description");


// reprend un personnage via l'id avec ajout contenu
getPersonnage(id,(personnage)=>{
  title.innerText = `Nom : ${personnage.name}.`;
  description.innerText = `Description : ${personnage.description}!`;
});

// bouton qui permet le retour
document.querySelector("#button-back").addEventListener("click",()=>{
  window.location.href = "/";
})