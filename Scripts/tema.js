// Botão de alternância
const toggleButton = document.getElementById("theme-toggle");

// Verifica se já existe tema salvo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Evento de clique
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salva no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
