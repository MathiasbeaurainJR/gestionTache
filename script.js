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
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// fonction principale pour afficher les taches sous forme de cartes
function renderTasks() {
    tasksContainer.innerHTML = "";

    // filtrer les taches selon le statut et la recherche
    const filtered = tasks.filter(task => {
        const matchFilter = currentFilter === "toutes" || task.statut === currentFilter;
        const matchSearch = task.titre.toLowerCase().includes(currentSearch.toLowerCase()) ||
                            (task.description && task.description.toLowerCase().includes(currentSearch.toLowerCase()));
        return matchFilter && matchSearch;
    });

    // afficher un message si aucune tache nest trouve
    if (filtered.length === 0) {
        tasksContainer.innerHTML = `<p class="text-center text-muted">aucune tache trouve.</p>`;
        return;
    }
// creer dynamiquement les cartes pour chaque tache
    filtered.forEach(task => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";

        // definir la classe du badge selon le statut
        let badgeClass = "bg-secondary";
        if (task.statut === "en cours") badgeClass = "bg-warning text-dark";
        if (task.statut === "terminée") badgeClass = "bg-success";
        if (task.statut === "bloquée") badgeClass = "bg-danger";

        col.innerHTML = `
            <div class="card p-3 shadow-sm h-100">
                <h5 class="card-title">${task.titre}</h5>
                <p class="card-text text-muted">${task.description || "pas de description"}</p>
                <span class="badge ${badgeClass} mb-2 w-25">statut: ${task.statut}</span>
                <small class="text-muted mb-3">creee le : ${new Date(task.createdAt).toLocaleDateString()}</small>
                <div class="d-flex gap-2 mt-auto">
                    <button class="btn btn-sm btn-outline-primary w-50" onclick="prepareEdit(${task.id})">modifier</button>
                    <button class="btn btn-sm btn-outline-danger w-50" onclick="deleteTask(${task.id})">supprimer</button>
                </div>
            </div>
        `;
        tasksContainer.appendChild(col);
    });
}

