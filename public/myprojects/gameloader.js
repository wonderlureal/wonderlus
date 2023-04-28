var gamesText = `{
    "games":[
         {
            "name":"ProdigyGames 4",
            "img":"img/pg4.png",
            "path":"https://techarb2.github.io/prodigygames4"
        },
        {
            "name":"ProdigyGames 2",
            "img":"https://raw.githubusercontent.com/techarb2/prodigygames2/main/favicon.ico",
            "path":"https://techarb2.github.io/prodigygames2"
        },
        {
            "name":"Discord Chat",
            "img":"img/ign.png",
            "path":"chat.html"
        },
        {
            "name":"Github Page",
            "img":"img/github.webp",
            "path":"https://github.com/techarb2/"
        },
        {
            "name":"Skyylight Backup",
            "img":"img/skylight.png",
            "path":"https://rp-sisk12-net.tk/"
        },
        {
            "name":"Skyylight Backup 2",
            "img":"img/skylight.png",
            "path":"https://celesta.gq"
        },
        {
           "name":"Hapara.ga",
            "img":"img/haparagames.png",
            "path":"https://hapara.ga"
        }
    ]
}`;
var gameObject = JSON.parse(gamesText);
for (i in gameObject.games) {
  let elem1 = document.createElement("div");
  elem1.className = "game-button";
  document.getElementById("gameSelect").appendChild(elem1);
  console.log("div made");
  let elem2 = document.createElement("a");
  
    elem2.href = gameObject.games[i].path;
  
  elem1.appendChild(elem2);
  console.log("a made");
  let elem3 = document.createElement("img");
  elem3.src = gameObject.games[i].img;
  elem3.alt = gameObject.games[i].name;
  elem2.appendChild(elem3);
  console.log("img made");
  let elem4 = document.createElement("p");
  elem4.innerHTML = gameObject.games[i].name;
  elem2.appendChild(elem4);
  console.log("p made");
}
