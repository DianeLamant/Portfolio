# Hard Social Network

_Bloc JS_

_Projet en groupe (3 ou 4 personnes)_

_Durée : une semaine_

## Compétances visée

- Initiation au MVC (Modèle Vue Controlleur), spécifiquement : Modèle et Vue

- Manipulation du DOM avec la bibliotèque jQuery

- Utilisation des Class et de la POO (Programmation orientée objet)

- En option : utiliser Bootstrap

---

## 1. Présentation du projet

À partir des Class existantes du projet _Easy Social Network_ : __User__ et __Post__

Ces Class sont disponibles dans la source fourni.

Créer deux Class __PostDisplayer__ et __UserDisplayer__ dont les rôles sont respectivement d'afficher un post et d'afficher un utilisateur.

L'affichage des posts et des utilisateurs devra être fait dans la page HTML qui initialement sera presque vide.

Le code HTML de la page ne doit pas être modifié à priori, si ce n'est pour charger des fichiers _.js_ ou des fichier _.css_ et donc il ne faudra pas y ajouter de balises HTML. Sauf pour créer les formulaires.

Concernant l'affichage des utilisateur et des posts, il faudra donc créer de nouveux éléments HTML via javascript afin de les ajouter à la page (en utilisant jQuery).

## 2. Consignes

- Créer les Class __PostDisplayer__ et __UserDisplayer__ qui ont pour but respectivement de gérer l'affichage d'un post et d'un utilisateur

- Un formulaire de création d'utilisateur doit permettre de créer un utilisateur et donc une nouvelle instance de la Class __User__

- Un formulaire de création de post doit permettre de créer un post associé à un utilisateur

- Il faut créer le formulaire d'ajout de post (sachant qu'un post est associé à un utilisateur, il faut prendre ça en compte dans le formulaire : champs de séléction d'utilisateur dynamique en fonciton de la liste des utilisateurs)

- Dans un premier temps, il faut créer la maquette sur papier ou via un logiciel approprié pour déterminer l'affichage voulu.

---

_>>> CONSIGNES OPTIONNELLES <<<_

---

- Permettre l'ajout d'_amis_ avec un formulaire spécifique, création d'une Class spécifique __FriendDisplayer__ pour afficher les amis des utilisateurs (affichage différent par rapport à 
__UserDisplayer__)

- Afficher le rendu HTML en utilisant le framework Bootstrap (utilisation de la grille responsive et du style, notamment pour les formulaires)

- Styler via CSS pour que le rendu soit beau, ajouter des transitions lors d'ajout d'utilisateur, de post

## 3. Ressources

- Les Class __User__ et __Post__

- Le fichier HTML correspondant à la page de base

- Le formulaire de création d'utilisateur est fournit

- Le fichier package.json avec les dépendances nécessaires intégrées (utiliser _npm install_ pour que le dossier _node_modules_ soit créé)
