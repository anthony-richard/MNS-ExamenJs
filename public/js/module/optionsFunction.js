// options pour récupérer des éléments
let getOption ={
    method: "GET",
    headers:new Headers(),
    mode: "cors",
    cache: "default",
};

// options pour envoyer des éléments
let postAndPutOption = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
  };

// options pour supprimer des éléments
let deleteOption ={
    method: "DELETE",
    headers:new Headers(),
    mode: "cors",
    cache: "default",
};

// récupère la liste de personnage
export function list(cb){
    fetch("/personnage", getOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res);
        });
}


// récupère un personnage
export function getPersonnage(id, cb){
    fetch(`/personnage/${id}`, getOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res);
        });
}

// ajout du personnage
export function uploadPersonnage(personnage, cb){
    postAndPutOption.method = "POST";
    postAndPutOption.body = JSON.stringify(personnage);
    fetch("/personnage", postAndPutOption)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => {
          cb(res)
      }); 
}

// édition du personnage
export function editPersonnage(personnage,id,cb){
    postAndPutOption.method = "PUT";
    postAndPutOption.body = JSON.stringify(personnage);
    fetch(`/personnage/${id}`, postAndPutOption)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => {
          cb(res)
      }); 
}

// suppression personnagage
export function deletePersonnage(id, cb){
    fetch(`/personnage/${id}`,deleteOption)
    .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => {
          cb(res)
      }); 
}