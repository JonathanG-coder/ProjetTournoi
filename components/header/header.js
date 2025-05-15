export function createHeader() {
    const header = document.createElement('header');
    header.innerHTML =`
    <img src="../../img/logo-noir.png" alt="">
    <nav>
        <li>
            <a href="../../pages/index.html">Accueil</a>
            <a href="../../pages/inscription.html">Inscription</a>
        </li>
    </nav>
    `
    return header;
}