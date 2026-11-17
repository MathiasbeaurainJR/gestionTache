"use strict";

// recuperation des taches stockees ou tableau vide
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "toutes";
let currentSearch = "";
let editingId = null;