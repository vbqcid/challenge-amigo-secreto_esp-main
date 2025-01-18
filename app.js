const listaAmigos = [];


const inputAmigo = document.getElementById("amigo");
const listaAmigosElemento = document.getElementById("listaAmigos");
const resultadoElemento = document.getElementById("resultado");


function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }


  listaAmigos.push(nombre);
  inputAmigo.value = "";


  actualizarListaAmigos();
}


function actualizarListaAmigos() {

  listaAmigosElemento.innerHTML = "";

 
  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    li.classList.add("list-item");
    listaAmigosElemento.appendChild(li);
  });
}


function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("La lista está vacía. Agrega nombres antes de sortear.");
    return;
  }


  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSeleccionado = listaAmigos[indiceAleatorio];


  resultadoElemento.innerHTML = `
    <li class="winner-item">🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>
  `;
}
