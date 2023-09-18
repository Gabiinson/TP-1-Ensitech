/**Récupérez le bouton d'ouverture et la fenêtre modale**/
const openBtn = document.getElementById('openBtn');
const modal = document.getElementById('myModal');

/**Récupérez le bouton de fermeture de la fenêtre modale**/
const closeBtn = document.getElementById('closeBtn');

/**Ajoutez un evenement au clic du bouton d'ouverture**/
openBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

/**Ajoutez un evenement au clic du bouton de fermeture**/
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

/**Fermez la fenêtre modale lorsque l'utilisateur clique en dehors de celle-ci**/
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


/**Récupérez le bouton et la liste d'éléments**/
const toggleButton = document.getElementById('toggleButton');
const elementList = document.getElementById('elementList');

/**Ajoutez un gestionnaire d'événement lors du clic**/
toggleButton.addEventListener('click', function() {
    if (elementList.style.display === 'none' || elementList.style.display === '') {
    /**Si elle est masquée, affichez-la**/
        elementList.style.display = 'block';
        toggleButton.textContent = 'Masquer le contenu';
    } else {
    /**Si elle est visible, masquez-la**/
        elementList.style.display = 'none';
        toggleButton.textContent = 'Afficher plus';
    }
});


/**Récupérez le chemin de la page actuelle**/
const currentPagePath = window.location.pathname;

/**Récupérez tous les liens du menu**/
const menuLinks = document.querySelectorAll('.menu-item');

/**Parcourez les liens pour trouver celui qui correspond à la page actuelle**/
menuLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  
  if (linkPath === currentPagePath) {
    link.parentNode.classList.add('active');
  }
});

/**Validation du formulaire personnalisée en Javascript**/
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    if (password.length < 8) {
        alert("Le mot de passe doit avoir au moins 8 caractères.");
        return false;
    }

    return true;
}
