import {list,deletePersonnage} from "./module/optionsFunction.js"

// selection de la balise avec id data-wrapper pour tout le contenu de l'index
let containerListe = document.querySelector("#data-wrapper");

list((personnages)=>{
  personnages.forEach((personnages) => {
      createRow(personnages);
    });
})

function deleteElement(id){
  deletePersonnage(id,()=>{
    containerListe.innerHTML= "";
    list((personnages)=>{
      personnages.forEach((personnages) => {
          createRow(personnages);
        });
    })
    
  })
}
// crée un nouveau personnage - nouvelle ligne dans index
function createRow(data) {
  if (!data) return;
  let tr = document.createElement('tr');
  tr.innerHTML =  `
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>
      <a href="/edit/${data.id}" class="btn btn-primary">Modifier</a>
      <button class="btn btn-danger crud-btn-delete">Supprimer</button>
    </td>
  `;
  // avec création d'un bouton qui delete grâce à l'id
  tr.querySelector(".crud-btn-delete").addEventListener("click", (event) => {
    deleteElement(data.id);
  });
  // event 
  tr.addEventListener("click",(event)=>{
    if (event.target.localName !== "td") return;
    window.location.href = `/personnageView/${data.id}`
  });
  containerListe.appendChild(tr);
}





