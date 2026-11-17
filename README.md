Contexte et objectif
Vous devez réaliser une application web permettant de gérer une liste de tâches. L’utilisateur doit pouvoir ajouter, consulter,
modifier et supprimer des tâches, mais aussi les filtrer et effectuer une recherche.
Le projet doit être développé en JavaScript, avec les notions étudiées en cours : variables, fonctions, tableaux, objets littéraux,
conditions, boucles, événements et manipulation du DOM.
2. Données d’une tâche
Chaque tâche est représentée par un objet JavaScript contenant les propriétés suivantes :
• id : identifiant unique (par exemple avec Date.now()).
• titre : obligatoire, chaîne de caractères non vide.
• description : facultative, chaîne de caractères.
• statut : « à faire », « en cours », « terminée » ou « bloquée ».
• createdAt : date de création.
• couleur : couleur associée au statut (bleu, orange, vert ou rouge).
Les tâches seront stockées dans un tableau d’objets. Prévoyez une validation pour empêcher l’enregistrement d’un titre vide ou
d’un statut non autorisé.
