# Blog avec Next.js et Express

## Description

Ce projet est un blog simple comprenant un **frontend en Next.js** et un **backend en Express.js**. Il permet d'afficher des articles, gérer l'authentification des utilisateurs et consommer des API via Axios.

## Technologies utilisées

### Frontend (Client)

-  **Next.js 14** : Framework React pour les applications web modernes.
-  **Material-UI (MUI)** : Bibliothèque de composants UI pour React.
-  **NextAuth.js** : Gestion de l'authentification des utilisateurs.
-  **Axios** : Requêtes HTTP pour récupérer et envoyer des données.
-  **ESLint** : Linter pour assurer la qualité du code.

### Backend (Serveur)

-  **Express.js** : Framework léger pour construire des API REST.
-  **jsonwebtoken (JWT)** : Gestion de l'authentification.
-  **MongoDB** (au choix) : Base de données pour stocker les articles et utilisateurs.

## Installation

1. **Cloner le projet**

   ```bash
   git clone https://github.com/votre-repo/blog-next-express.git
   cd blog-next-express
   ```

2. **Installer les dépendances**

   ```bash
   yarn install
   ```

3. **Lancer l'application (client et backend en parallèle)**

   ```bash
   yarn start
   ```

4. **Accéder à l'application**
   -  **Frontend** : [http://localhost:3000](http://localhost:3000)
   -  **Backend** : [http://localhost:5000](http://localhost:5000)

## Scripts disponibles

-  **Démarrer le frontend et backend** : `yarn start`
-  **Lancer uniquement le client** : `yarn workspace client start`
-  **Lancer uniquement le backend** : `yarn workspace backend start`

## Fonctionnalités

✔️ Affichage des articles du blog
✔️ Authentification avec NextAuth.js et JWT
✔️ UI moderne avec MUI
✔️ API REST en Express.js
✔️ Requêtes API avec Axios

## Configuration de l'authentification

-  Créez un fichier `.env` à la racine du **backend** avec :

   ```env
   JWT_SECRET=your-secret-key
   DATABASE_URL=mongodb://localhost:27017/blog
   ```

-  Créez un fichier `.env.local` dans le **client** avec :
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXTAUTH_URL=http://localhost:3000
   ```
