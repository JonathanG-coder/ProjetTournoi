const nav = document.createElement('navbar')
function createNavbar(navbar) {
    nav.innerHTML = `
    <button id="theme-toggle" class="themeBtn">🌙</button>
    <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
  <div class="form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  </div>
    <a class="navbar-brand" href="#">🎮 Tournoigame 🏆</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Qui suis-je ?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mes compétences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mon portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contactez-moi</a>
          </li>
        <form class="d-flex mt-3" role="Rechercher">
          <input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Rechercher"/>
          <button class="btn btn-outline-success" type="submit">Rechercher</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    `
    document.body.appendChild(nav)
    return nav
}

const containerTournaments = document.getElementById(`tournaments`);

    function afficherTournaments(tournaments) {
        tournaments.forEach((tournament) => {
          const divTournaments = document.createElement(`div`);
          divTournaments.innerHTML = `
          <img src="${tournament.img}">
          <h1>${tournament.name}</h1>
          <h2>${tournament.game}</h2>
          <p>${tournament.date}</p>
          <p>${tournament.maxParticipants}</p>
          <p>${tournament.currentParticipants}</p>
          <input type="button" Value="S'inscrire" onclick="window.location='/pages/inscription.html';">
          `;
          containerTournaments.appendChild(divTournaments);
        });
      }

fetch(`/data/tournaments.json`)
    .then((response) => response.json())
    .then((data) => {
      afficherTournaments(data);
    })
    .catch((error) => {
      console.error(error);
    });
    