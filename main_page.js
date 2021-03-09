// on récupère tous les éléments de la classe 'btn'
let btns = document.getElementsByClassName("btn");

// on crée une boucle pour ajouter une détection des événements 'click' sur les classes 'btn'
for (let i = 0, len = btns.length; i < len; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    // si une classe est active on la désactive
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // et on rend cette classe 'active'
    this.className += " active";
  });
}

// On vise le bouton menu pour basculer entre l'ouverture et la fermeture du panneau
let dropdown = document.getElementsByClassName("dropdown")[0];
let content = document.getElementsByClassName("content")[0];
dropdown.addEventListener("click", () => { 
  content.classList.toggle("show");
  })

// Si on clique hors de l'élément portfolio et que son panneau est ouvert, on le ferme
document.body.addEventListener("click", function(event) {
  if (!event.target.matches(".dropdown")) {
    if (content.classList.contains("show")) {
         content.classList.remove("show");
    }
  }
})

// Quand l'utilisateur scrolle au-delà de 80px, la taille de la barre de menu est réduite
window.onscroll = () => {
  let btn = document.getElementsByClassName("btn");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {    
    for (i = 0, len=btn.length; i < len; i++) {
      btn[i].style.padding = "0 0 12px 0";
    }
  }
  else {
    for (i = 0, len=btn.length; i < len; i++) {
      btn[i].style.padding = "12px 0";
    }
  }
}

// il faut désactiver le double click
// il faut que le panneau se ferme lorsque le scroll est activé
// il faut que le menu soit toujours clicable, même lorsque du texte passe en-dessous
// l'ajout de l'animation à la classe fall a pour effet de rendre le texte visible sous le header au scroll : à corriger
// différer l'apparition du document d'une fraction de seconde pour laisser le temps aux fonts d'être chargées ou les télécharger
// créer un effet de transition au changement de @media, comme pour le menu header qui varie progressivement au scroll

// créer des miniatures de mes pages, avec lien vers celles-ci et zoom au survol

