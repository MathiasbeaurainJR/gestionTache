"use strict";

// recuperation des taches stockees ou tableau vide
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "toutes";
let currentSearch = "";
let editingId = null;

// selection des elements
const form = document.getElementById("task-form");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const statusInput = document.getElementById("status");
const submitBtn = document.getElementById("submit-btn");
const tasksContainer = document.getElementById("tasks-container");
const searchInput = document.getElementById("search-input");
const filterBtns = document.querySelectorAll(".filter-btn");

// fonction pour sauvegarder et rafraichir l affichage
function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

