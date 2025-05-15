const messageContainer = document.getElementById(`message`);
const infosContainer = document.getElementById(`infos`);
let users = [];

//vérifier si le user existe déjà
window.onload = () => {
  const user = localStorage.getItem("connecteduser");
  if (user) {
    messageContainer.innerHTML = `
<h2>Bravo, vous êtes incrit!</h2>
<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXR3bmR3ZXdkdzd4dXR0dG81em10OTJnMHZ6Ymx6ZWdmZGhqbDRheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IJTCcELAbVgHK/giphy.gif" alt="">
    `;
    afficheInfos();
  } else {
    messageContainer.innerHTML = `
    <h2>Bravo, vous êtes incrit!</h2>
<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXR3bmR3ZXdkdzd4dXR0dG81em10OTJnMHZ6Ymx6ZWdmZGhqbDRheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IJTCcELAbVgHK/giphy.gif" alt="">`;
  }
};

function afficheInfos(user) {}
