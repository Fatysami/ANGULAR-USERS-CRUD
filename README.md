# Application Angular CRUD

## Description
Cette application est une application Angular à page unique qui offre des opérations de création, lecture, mise à jour et suppression (CRUD) sur les données utilisateurs. Elle utilise une fausse API pour la gestion des données utilisateurs.

## Fonctionnalités

- **Gestion des utilisateurs** : Liste, crée, met à jour et supprime des utilisateurs.
- **Pagination** : Navigation entre différentes pages de données utilisateur.
- **Sélection de langue** : Change la langue de l'application dynamiquement avec un menu déroulant.
- **Style** : Utilise Bootstrap pour le design réactif et FontAwesome pour les icônes.
- **Observables** : Gère les flux de données asynchrones en utilisant les observables RxJS.

## Comment exécuter

1. Cloner le dépôt.
2. Exécuter `npm install` pour installer les dépendances.
3. Utiliser `ng serve` pour démarrer le serveur de développement.

## Composants

- `HeaderComponent` : Affiche la barre de navigation supérieure et le sélecteur de langue.
- `MenuComponent` : Contient les liens de navigation pour l'application.
- `UserListComponent` : Affiche un tableau des utilisateurs avec des actions pour éditer ou supprimer.
- `UserFormComponent` : Formulaire pour créer ou mettre à jour des données utilisateur.

## Services

- `UserService` : Gère les requêtes HTTP pour récupérer et gérer les données utilisateur.

## Localisation

- `@ngx-translate/core` : Support de l'internationalisation pour plusieurs langues.

## Dépendances

- Angular
- Bootstrap
- FontAwesome
- RxJS
- @ngx-translate/core

Pour plus d'informations détaillées, veuillez vous référer aux fichiers de composants et de services individuels au sein du projet.