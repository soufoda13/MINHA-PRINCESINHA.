const startDate = new Date("2025-01-23T00:00:00");

function criarFlor() {
  const flor = document.createElement("div");
  flor.classList.add("flor");
  flor.innerText = "🌸"; // você pode trocar por outras flores: 🌼 🌷 💮 🌺

  flor.style.left = Math.random() * 100 + "vw";
  flor.style.fontSize = (20 + Math.random() * 20) + "px";

  document.getElementById("flores-container").appendChild(flor);

  setTimeout(() => {
    flor.remove();
  }, 4000);
}

function iniciarFlores() {
  for (let i = 0; i < 30; i++) {
    setTimeout(criarFlor, i * 200);
  }
}

function abrirCarta() {
  document.getElementById("mensagem").classList.remove("escondido");
  iniciarFlores();
}
