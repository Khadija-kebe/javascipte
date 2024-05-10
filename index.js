const livre = document.getElementById('ajout');
const affiche = document.getElementsByClassName('modal')[0]; 

livre.addEventListener('click', function() {
    if (affiche.style.display === "none") {
        affiche.style.display = "block";
    }
    else {
       affiche.style.display = "none";
    } // Modifier le style de cet élément
});



// const inputs = document.getElementsByClassName('input'); 
// const button = document.getElementById('button');

// button.addEventListener('click', function() {
//     for (let i = 0; i < inputs.length; i++) { 
//         const newDiv = document.createElement('div');
//         newDiv.innerHTML = inputs[i].value;
//         document.body.appendChild(newDiv);
        
//     }
// });

const inputs = document.getElementsByClassName("inputs");
const container = document.querySelector(".container");

function Save() {
  const titre = inputs[0].value;
  const auto = inputs[1].value;
  const categori = inputs[2].value;
  const id = new Date().getTime();
  let read = false;
  //  recuperation des donners du localstorage
  const donner = JSON.parse(localStorage.getItem("Livres")) || [];

  // Sauvegarde de mes données dans mon localstorage
  const data = {
    id: id,
    titre: titre,
    auto: auto,
    categori: categori,
    read: read,
  };
  donner.push(data);

  localStorage.setItem("Livres", JSON.stringify(donner));

  // suppression des champs
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";

  // fermeture du modale
  // closeModal();

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const h3 = document.createElement("h3");
  h3.textContent = titre;

  const h4 = document.createElement("h4");
  h4.textContent = auto;

  const p = document.createElement("p");
  p.textContent = categori;

  const divButton = document.createElement("div");
  divButton.classList.add("divButton");

  const button1 = document.createElement("button");
  button1.textContent = "Achiver";
  button1.classList.add("button1");

  const button2 = document.createElement("button");
  button2.textContent = "Supprimer";
  button2.classList.add("button2");

  const button3 = document.createElement("button");
  button3.textContent = "See Id";
  button3.classList.add("button3");

  divCard.appendChild(h3);
  divCard.appendChild(p);
  divCard.appendChild(h4);
  divCard.appendChild(divButton);
  divButton.appendChild(button1);
  divButton.appendChild(button2);
  divButton.appendChild(button3);
  container.appendChild(divCard);

  button2.addEventListener("click", function () {
    const filteredDonner = donner.filter((item) => item.id !== id);
    localStorage.setItem("Livres", JSON.stringify(filteredDonner));
    divCard.remove();
  });

  // marquer comme lu barrant les textes

  button1.addEventListener("click", function () {
    read = !read;
    if (read) {
      divCard.style.textDecoration = "line-through";
    }
  });

  // voir l'id sous forme d'alerte
  button3.addEventListener("click", function () {
    alert("ID: " + id);
  });
}