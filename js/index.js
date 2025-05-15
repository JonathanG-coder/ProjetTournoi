export default function createTournament() {
    const tournament = document.createElement('div')
    tournament.className = "tournament"

const response = fetch("./data/tournaments.json") // Nous avons fait appel à tout l'objet JSON (skills.json)
    .then(response => response.json()) // Nous avons converti la réponse en un format que le navigateur connait (JSON)
    .then(data => tournament.innerHTML = // Nous avons parcouru la réponse et affiché grâce à innerHTML, les éléments de l'objet
        data.map(tournament => `
            <h1>${tournament.name}</h1>
            <h3>${tournament.game}</h3>
            <p>${tournament.date}</p>
            <p>${tournament.maxParticipants}</p>
            <p>${tournament.currentParticipants}</p>
            `).join("")
        );
    
        return tournament // Nous avons retourné la div pour être utilisée ailleurs
}