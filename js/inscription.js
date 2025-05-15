// Récupération des données depuis le JSON
fetch("../data/tournaments.json")
  .then((response) => response.json())
  .then((data) => {
    const tournoi = data.inscription; 
    inscriptions(data);
  })
  .catch((error) => {
    console.e
    rror("Erreur lors du chargement des données :", error);
  });

// Fonction d'affichage
function inscriptions(tournoi) {
  const container = document.getElementById("inscriptionContainerTournoi");

  const inscription = document.createElement("div");

  inscription.innerHTML = `
    <h1>Inscriptions</h1>
    <div class="inscriptionFormulaire">
        <h2>${tournoi.name}</h2>
        <p>Jeu : ${tournoi.game}</p>
        <p>Date : ${tournoi.date}</p>
        <img src="${tournoi.img}" alt="Image du tournoi" />
    </div>
  `;

  container.appendChild(inscription);
}
