<!-- omit in toc -->
# AlloMedia

Bienvenue dans le projet Allo Media, c'est une application pour le restaurant mar7aba avec un service de livraison à domicile. Les Clients pourront donc passer commande directement depuis l’application et payer avant livraison à domicile. Ce répertoire est un système d'authentification pour cette application.

## Utilisation

### Clonage du Répertoire
Clonez le répertoire sur votre machine locale à l'aide de la commande suivante: "git clone https://github.com/Abdelmounaime-Abounore/AlloMedia-System-Authentification.git"

### Configuration du Projet
1. Ouvrez le projet dans un éditeur.
2. Accédez au répertoire du projet avec la commande suivante: "cd Authentification_JWT"

3. Installez les dépendances requises avec la commande: "npm install"

### Configuration de la Base de Données
Configurez les informations de votre base de données dans le fichier `.env`.

### Démarrage du Serveur
Pour démarrer le serveur, utilisez la commande: "npm start"


### Configuration du Frontend
1. Ouvrez un nouveau terminal.
2. Accédez au répertoire "Allo_Media" avec la commande: "cd Allo_Media"

3. Installez les dépendances requises avec la commande: "npm install"

### Démarrage du Serveur Frontend
Pour démarrer le serveur frontend, utilisez la commande: "npm run dev"


### Accès à l'Application
Ouvrez votre navigateur Web et accédez à [http://localhost:3000] pour afficher l'application.

## Technologies Utilisées

### Backend

- express.js
- cookie-parser
- cors
- dotenv
- jsonwebtoken
- mongoose
- nodemailer
- nodemon
- swagger-jsdoc
- swagger-ui-express
- jest
- supertest

### Frontend

- react
- react-dom
- react-router-dom
- react-hook-form
- axios
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome
- @hookform/resolvers
- js-cookie
- yup

## Documentation de l'API

- Pour consulter la documentation de l'API, utilisez Swagger en ouvrant votre navigateur Web et en accédant à [http://localhost:5000/api-docs/].

## Pages

- register
- login
- home
- forget password
- reset password
- email verification