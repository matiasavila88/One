// Lista donde se guardarán los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("nombreAmigo"); // Captura el input
    let nombre = input.value.trim(); // Elimina espacios extra

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array
    input.value = ""; // Limpia el campo de texto
    mostrarLista(); // Actualiza la lista en la pantalla
}

// Función para mostrar la lista de amigos en la pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla

    amigos.forEach(amigo => {
        let item = document.createElement("li"); // Crea un elemento <li>
        item.textContent = amigo; // Le asigna el nombre
        lista.appendChild(item); // Lo agrega a la lista en el HTML
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length); // Número aleatorio
    let ganador = amigos[indice]; // Selecciona el nombre

    document.getElementById("resultado").innerHTML = `🎉 El amigo secreto es: <strong>${ganador}</strong>!`;
}

