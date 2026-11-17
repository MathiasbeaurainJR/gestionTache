"use strict";

// recuperation des taches depuis le localstorage ou tableau vide
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "toutes";
let currentSearch = "";
let editingId = null;

// selection des elements du html
const form = document.getElementById("task-form");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const statusInput = document.getElementById("status");
const submitBtn = document.getElementById("submit-btn");
const tasksContainer = document.getElementById("tasks-container");
const searchInput = document.getElementById("search-input");
const filterBtns = document.querySelectorAll(".filter-btn");

// fonction pour associer une couleur au statut
function getStatusColor(status) {
    if (status === "à faire") return "bleu";
    if (status === "en cours") return "orange";
    if (status === "terminée") return "vert";
    if (status === "bloquée") return "rouge";
    return "gris"; // par defaut si le statut ne correspond pas
}

// fonction pour sauvegarder dans le stockage et afficher les taches
function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));[cite: 8]
    renderTasks();
}

// fonction principale pour afficher les taches sous forme de cartes
function renderTasks() {
    tasksContainer.innerHTML = "";[cite: 8]

    // filtrer les taches selon le statut et la recherche
    const filtered = tasks.filter(task => {
        const matchFilter = currentFilter === "toutes" || task.statut === currentFilter;[cite: 8]
        const matchSearch = task.titre.toLowerCase().includes(currentSearch.toLowerCase()) ||
                            (task.description && task.description.toLowerCase().includes(currentSearch.toLowerCase()));[cite: 8]
        return matchFilter && matchSearch;
    });

    // afficher un message si aucune tache n'est trouvee
    if (filtered.length === 0) {
        tasksContainer.innerHTML = `<p class="text-center text-muted">aucune tache trouvee.</p>`;[cite: 8]
        return;
    }

    