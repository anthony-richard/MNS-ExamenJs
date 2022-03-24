import {editPersonnage,getPersonnage} from "./module/optionsFunction.js"

// mise à jour du formulaire
let name = document.querySelector("#name");
let description = document.querySelector("#description");
let form = document.querySelector("#form-edit");

let decomposeUrl = window.location.href.split("/");
let id = decomposeUrl[decomposeUrl.length - 1];

// reprise des informations du personnage
getPersonnage(id,(personnage)=>{
    name.value = personnage.name;
    description.value = personnage.description;
    console.log(personnage);
  });
  
// évent du formulaire via l'envoi
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendFormEdit();
});

// envoi des modifications
function sendFormEdit(){
  let validName = document.querySelector("#name");
  let validDescription = document.querySelector("#description");
  if (!validName || !validDescription) return;
  let personnage = {
    id: +id,
    name: name.value,
    description: description.value,
  
  }
  console.log(personnage);

// renvoi à la page d'accueil
  editPersonnage(personnage,+id,()=>{
    window.location.href = "/";
  })
}
  