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

**User Story 3**: En tant qu'utilisateur, je veux pouvoir ajouter des produits à mon panier afin de les acheter plus tard.

**Critères d'acceptation** :

- Chaque produit doit avoir un bouton "Ajouter au panier" visible sur sa page.
- Les produits ajoutés doivent apparaître dans une section dédiée "Panier".
- Le panier doit afficher le nom du produit, le prix unitaire, la quantité, et le total.
- Les quantités doivent pouvoir être modifiées depuis le panier.

**User Story 4**: En tant qu'utilisateur, je veux pouvoir retirer des produits de mon panier afin de n'acheter que ce qui m'intéresse.

**Critères d'acceptation** :

- Chaque produit dans le panier doit avoir une option "Supprimer".
- Après suppression, le produit ne doit plus apparaître dans le panier.

### 2.3 Gestion des commandes

**User Story 5**: En tant qu'utilisateur, je veux pouvoir finaliser mon achat afin de commander les produits de mon panier.

**Critères d'acceptation** :

- Un bouton "Passer commande" doit être disponible dans le panier.
- Le processus de commande doit inclure la saisie d’une adresse de livraison et d’un moyen de paiement.
- Une confirmation de commande doit s’afficher une fois le paiement validé.

### 2.4 Évaluation et commentaires des produits

**User Story 6**: En tant qu'utilisateur, je veux pouvoir laisser une évaluation et un commentaire sur un produit afin de partager mon avis.

**Critères d'acceptation** :

- Une section "Avis" doit être disponible sur chaque page produit.
- Les utilisateurs doivent pouvoir attribuer une note (1 à 5 étoiles) et rédiger un commentaire.
- Les commentaires doivent inclure le nom de l’acheteur et la date de publication.
- Les commentaires doivent être soumis uniquement si l’acheteur a commandé le produit.

**User Story 7**: En tant qu'acheteur, je veux pouvoir consulter les évaluations et commentaires des produits afin de prendre une décision d'achat éclairée.

**Critères d'acceptation** :

- Les évaluations doivent afficher la moyenne des notes et le nombre total de commentaires.
- Les commentaires doivent être triés par date, du plus récent au plus ancien.

