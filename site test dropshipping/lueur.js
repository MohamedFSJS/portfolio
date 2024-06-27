function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      sidebar.classList.remove("open"); // Retirer la classe open
    } else {
      sidebar.style.width = "250px";
      sidebar.classList.add("open"); // Ajouter la classe open
    }
  }
  
  // Ajoute l'écouteur d'événements pour le bouton de menu
  document.getElementById("menu-button").addEventListener("click", toggleSidebar);
  
  // Ajoute l'écouteur d'événements pour le bouton de fermeture
  document.getElementById("menu-close-button").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").classList.remove("open"); // Retirer la classe open
  });
  
  // Fermer la barre latérale lorsque la fenêtre est redimensionnée à une taille plus grande
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      document.getElementById("sidebar").style.width = "0";
      document.getElementById("sidebar").classList.remove("open"); // Retirer la classe open
    }
  });

