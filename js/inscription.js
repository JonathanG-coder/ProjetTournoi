// Récupération des données depuis le JSON
fetch("../data/tournaments.json")
  .then((response) => response.json())
  .then((data) => {
    const tournoi = data.inscription; 
    inscriptions(data);
  })
  .catch((error) => {
    console.error("Erreur lors du chargement des données :", error);
  });



// Fonction d'affichage
function inscriptions(tournoi) {
  const container = document.getElementById("inscriptionContainerTournoi");

  const inscription = document.createElement("div");

  
  tournoi.forEach((tournoi) => {
    const listeTournois = document.createElement(`div`);
    listeTournois.innerHTML = `
    <div class="inscriptionFormulaire">
        <h2><input type="checkbox" id="tournoiGame" name="tournoiGame" value="${tournoi.name}">${tournoi.name}</h2>
        <p>Jeu : ${tournoi.game}</p>
        <p>Date : ${tournoi.date}</p>
    </div>`;

    container.appendChild(inscription);
    inscription.appendChild(listeTournois)
  });
}

