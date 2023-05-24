
const botom = document.getElementById("boton");

function redirigir() {
  var nombre = document.getElementById("nombre");
  var nom = nombre.value;
  localStorage.setItem("dato", nom);

  var apellido = document.getElementById("apellido");
  var apell = apellido.value;
  localStorage.setItem("dato1", apell);

  botom.textContent = "enviando..";

  setTimeout(function (){
    window.location.href = "indexx.html";
  }, 2000);
};

botom.addEventListener("click", redirigir);
