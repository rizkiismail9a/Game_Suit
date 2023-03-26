const kelingking = document.getElementById("kelingking");
const jempol = document.getElementById("jempol");
const telunjuk = document.getElementById("telunjuk");
const hasil = document.querySelector(".hasil h3");
const gambarKomputer = document.getElementById("komputer");

kelingking.addEventListener("click", lawanKelingking);
jempol.addEventListener("click", lawanJempol);
telunjuk.addEventListener("click", lawanTelunjuk);

function lawanKelingking() {
  const angkaKomputer = Math.random();

  if (angkaKomputer < 0.34) {
    gambarKomputer.setAttribute("src", "aset/image/kelingking.png");
    hasil.innerHTML = "Seri 🔥";
  } else if (angkaKomputer >= 0.34 && angkaKomputer < 0.68) {
    gambarKomputer.setAttribute("src", "aset/image/jempol.png");
    hasil.innerHTML = "Menang 🥳";
  } else {
    gambarKomputer.setAttribute("src", "aset/image/telunjuk.png");
    hasil.innerHTML = "Kalah 🤣";
  }
}
function lawanJempol() {
  const angkaKomputer = Math.random();

  if (angkaKomputer < 0.34) {
    gambarKomputer.setAttribute("src", "aset/image/kelingking.png");
    hasil.innerHTML = "Kalah 🤣";
  } else if (angkaKomputer >= 0.34 && angkaKomputer < 0.68) {
    gambarKomputer.setAttribute("src", "aset/image/jempol.png");
    hasil.innerHTML = "Seri 🔥";
  } else {
    gambarKomputer.setAttribute("src", "aset/image/telunjuk.png");
    hasil.innerHTML = "Menang 🥳";
  }
}
function lawanTelunjuk() {
  const angkaKomputer = Math.random();

  if (angkaKomputer < 0.34) {
    gambarKomputer.setAttribute("src", "aset/image/kelingking.png");
    hasil.innerHTML = "Menang 🥳";
  } else if (angkaKomputer >= 0.34 && angkaKomputer < 0.68) {
    gambarKomputer.setAttribute("src", "aset/image/jempol.png");
    hasil.innerHTML = "Kalah 🤣";
  } else {
    gambarKomputer.setAttribute("src", "aset/image/telunjuk.png");
    hasil.innerHTML = "Seri 🔥";
  }
}
