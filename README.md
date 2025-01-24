# Bmazon
## Cahier des Charges - Site de Vente en Ligne (MVP)

### 1. Description du projet

L'objectif de ce projet est de développer un site de vente en ligne permettant aux utilisateurs de vendre et d’acheter des produits. L'objectif est de fournir une plateforme intuitive et fonctionnelle avec les fonctionnalités essentielles suivantes :

- Ajout et gestion de produits
- Panier d'achat pour les acheteurs
- Gestion des commandes
- Évaluation et commentaires des produits

### 2. Users Stories et Critères d'acceptation

### 2.1 Gestion des produits

**User Story 1** : En tant qu'utilisateur, je veux pouvoir consulter des produits classés par catégories afin de trouver facilement ce dont j'ai besoin.

**Critères d'acceptation** :

- Les produits doivent être organisés en catégories clairement définies
- Chaque produit doit afficher les informations suivantes : nom, description, prix, stock disponible, et images.

### 2.2 Panier d'achat

**User Story 2**: En tant qu'utilisateur, je veux pouvoir ajouter des produits à mon panier afin de les acheter plus tard.

**Critères d'acceptation** :

- Chaque produit doit avoir un bouton "Ajouter au panier" visible sur sa page.
- Les produits ajoutés doivent apparaître dans une section dédiée "Panier".
- Le panier doit afficher le nom du produit, le prix unitaire, la quantité, et le total.
- Les quantités doivent pouvoir être modifiées depuis le panier.

**User Story 3**: En tant qu'utilisateur, je veux pouvoir retirer des produits de mon panier afin de n'acheter que ce qui m'intéresse.

**Critères d'acceptation** :

- Chaque produit dans le panier doit avoir une option "Supprimer".
- Après suppression, le produit ne doit plus apparaître dans le panier.

### 2.3 Gestion des commandes

**User Story 4**: En tant qu'utilisateur, je veux pouvoir finaliser mon achat afin de commander les produits de mon panier.

**Critères d'acceptation** :

- Un bouton "Passer commande" doit être disponible dans le panier.
- Le processus de commande doit inclure la saisie d’une adresse de livraison et d’un moyen de paiement fictif.
- Une confirmation de commande doit s’afficher une fois le paiement fictif validé.

### 2.4 Évaluation et commentaires des produits

**User Story 5**: En tant qu'utilisateur, je veux pouvoir laisser une évaluation et un commentaire sur un produit afin de partager mon avis.

**Critères d'acceptation** :

- Une section "Avis" doit être disponible sur chaque page produit.
- Les utilisateurs doivent pouvoir attribuer une note (1 à 5 étoiles) et rédiger un commentaire.
- Les commentaires doivent inclure le nom de l’acheteur et la date de publication.
- Les commentaires doivent être soumis uniquement si l’acheteur a commandé le produit.

**User Story 6**: En tant qu'acheteur, je veux pouvoir consulter les évaluations et commentaires des produits afin de prendre une décision d'achat éclairée.

**Critères d'acceptation** :

- Les évaluations doivent afficher la moyenne des notes et le nombre total de commentaires.
- Les commentaires doivent être triés par date, du plus récent au plus ancien.

## Architecture Technique

### 3.1 Langages et Technologies

**Backend** : Express.js
**Frontend** : React
**Base de donnée** : MySQL

### 3.2 Base de donnée

Table **produits** 
- id : Identifiant unique du produit.
- nom : Nom du produit.
- description : Description du produit.
- prix : Prix du produit.
- stock_disponible : Quantité en stock du produit.
- images : Liens des images du produit.

Table **commandes** 
- id : Identifiant unique de la commande.
- produit_id : Référence à un produit dans la table produits.
- date_commande : Date et heure de la commande.
- statut : Statut de la commande (en cours, expédiée, livrée).
- montant_total : Montant total de la commande.

Table **commande_produits**
- id : Identifiant unique de commande_produits
- commande_id: Référence à une commande dans la table commandes.
- produit_id : Référence à un produit dans la table produits.
- quantite : Quantité du produit dans la commande
- prix_unitaire : Prix unitaire du produit

Table **commentaires**
- id : Identifiant unique du commentaire.
- produit_id : Référence au produit évalué.
- note : Note attribuée au produit (entre 1 et 5).
- commentaire : Contenu du commentaire.
- date : Date et heure du commentaire.

![Screenshot 2025-01-24 at 14-52-26 localhost _ localhost _ bmazon phpMyAdmin 5 2 1-5 fc41](https://github.com/user-attachments/assets/c03c6f6a-283d-48aa-80e3-ae53286d8fd0)


### 3.2 Commandes et environnement
Création d'un fichier .env.local dans le /back puis le compléter : 
```
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
```


Lancement du backend 

```
cd back
npm install
node server.js
```

Lancement du front  
```
cd front
npm install
npm run start
```

### 4 . Diagramme des cas d'utilisations 

![Capture d’écran du 2025-01-24 14-54-16](https://github.com/user-attachments/assets/bf55d82b-a6ac-498a-ab3a-0e878c5f6492)


### 5. Livrables

- Application fonctionnelle avec toutes les fonctionnalités décrites.
- Documentation technique pour les développeurs. (facultatif)
- Guide d’utilisation pour les utilisateurs finaux. (facultatif)

