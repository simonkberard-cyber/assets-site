document.addEventListener("DOMContentLoaded", function() {
  // On cible le conteneur vide que tu vas placer sur tes pages
  var container = document.getElementById("menu-sacredsongs-container");
  
  if (container) {
    // 1. Injection du menu avec un HTML propre et allégé
    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 24px; font-size: 1.2em;">
          <a href="/sacredsongs">Menu</a>
      </div>
      <ul>
          <li><a href="/bardo-song">Bardo Song of Reminding oneself</a></li>
          <li><a href="#sukhavati">Brief Sukhavati Aspiration</a></li>
          <li><a href="/calling-the-guru">Calling the Guru from Afar</a></li>
          <li><a href="/cloudbanks-of-aspiration">Cloudbanks of Inspiration</a></li>
          <li><a href="/song-of-dzogchen-origin">Song of Dzogchen Origin</a></li>
      </ul>
    `;

    // 2. Logique de détection automatique de la page active
    var currentUrl = window.location.href;
    var links = container.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
      var linkPath = links[i].getAttribute("href");
      
      // On vérifie si l'URL de la page contient le lien du menu
      // (On exclut les ancres commençant par # pour éviter les faux positifs)
      if (linkPath && !linkPath.startsWith("#") && currentUrl.includes(linkPath)) {
        links[i].classList.add("active");
      }
    }
  }
});
