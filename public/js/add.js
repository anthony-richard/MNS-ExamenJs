import {uploadPersonnage} from "./module/optionsFunction.js"

//  selection du formulaire
let form = document.querySelector("#form-add");

// evénement sur le formulaire d'ajout
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // selection des id pour créer une new vue
  let validName = document.querySelector("#name");
  let validDescription = document.querySelector("#description");
  if (!validName || !validDescription) return;
  let req = {
    id: 0,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
  };

  // renvoi à la page d'accueil
  uploadPersonnage(req,()=>{
    window.location.href = "/";
  });
});

