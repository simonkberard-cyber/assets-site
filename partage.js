document.addEventListener("DOMContentLoaded", function() {
  var urlPage = window.location.href;
  var titrePage = document.title;
  var urlEncodee = encodeURIComponent(urlPage);
  var titreEncode = encodeURIComponent(titrePage);

  // On vérifie que les boutons existent avant d'ajouter les liens pour éviter les erreurs
  var btnFb = document.getElementById("btn-facebook");
  var btnWa = document.getElementById("btn-whatsapp");
  var btnMail = document.getElementById("btn-email");
  var btnCopier = document.getElementById("btn-copier");

  if (btnFb) btnFb.href = "https://www.facebook.com/sharer/sharer.php?u=" + urlEncodee;
  if (btnWa) btnWa.href = "https://api.whatsapp.com/send?text=" + titreEncode + "%20-%20" + urlEncodee;
  if (btnMail) btnMail.href = "mailto:?subject=" + titreEncode + "&body=" + urlEncodee;

  if (btnCopier) {
    btnCopier.addEventListener("click", function() {
      navigator.clipboard.writeText(urlPage).then(function() {
          alert("Link copied!");
      }).catch(function(err) {
          console.error("Erreur lors de la copie du lien : ", err);
      });
    });
  }
});
