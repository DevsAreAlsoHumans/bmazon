# Bmazon
## Cahier des Charges - Site de Vente en Ligne (MVP)

### 1. Description du projet

L'objectif de ce projet est de développer un site de vente en ligne permettant aux utilisateurs de vendre et d’acheter des produits. L'objectif est de fournir une plateforme intuitive et fonctionnelle avec les fonctionnalités essentielles suivantes :

- Ajout et gestion de produits par les vendeurs
- Panier d'achat pour les acheteurs
- Gestion des commandes
- Évaluation et commentaires des produits

### 2. Users Stories et Critères d'acceptation

#### 2.1 Gestion des produits par les vendeurs

**User Story 1** : En tant que vendeur, je veux pouvoir ajouter de nouveaux produits afin de les rendre disponibles à l'achat sur le site.

**Critères d'acceptation** :

- Le formulaire d'ajout de produit doit inclure les champs suivants : nom du produit, description, prix, stock disponible, et images.
- Le produit doit apparaître dans la liste des produits du vendeur.

**User Story 2** : En tant que vendeur, je veux pouvoir modifier ou supprimer mes produits afin de gérer mon catalogue.

**Critères d'acceptation** :

- Une interface doit permettre au vendeur de visualiser la liste de ses produits.
- Chaque produit doit avoir des options pour "Modifier" ou "Supprimer".
- Les modifications doivent être enregistrées et immédiatement reflétées dans le catalogue.
- La suppression d'un produit doit être confirmée avant exécution.


#### 2.2 Panier d'achat

**User Story 3**: En tant qu'acheteur, je veux pouvoir ajouter des produits à mon panier afin de les acheter plus tard.

**Critères d'acceptation** :

- Chaque produit doit avoir un bouton "Ajouter au panier" visible sur sa page.
- Les produits ajoutés doivent apparaître dans une section dédiée "Panier".
- Le panier doit afficher le nom du produit, le prix unitaire, la quantité, et le total.
- Les quantités doivent pouvoir être modifiées depuis le panier.

**User Story 4**: En tant qu'acheteur, je veux pouvoir retirer des produits de mon panier afin de n'acheter que ce qui m'intéresse.

**Critères d'acceptation** :

- Chaque produit dans le panier doit avoir une option "Supprimer".
- Après suppression, le produit ne doit plus apparaître dans le panier.

#### 2.3 Gestion des commandes

**User Story 5**: En tant qu'acheteur, je veux pouvoir finaliser mon achat afin de commander les produits de mon panier.

**Critères d'acceptation** :

- Un bouton "Passer commande" doit être disponible dans le panier.
- Le processus de commande doit inclure la saisie d’une adresse de livraison et d’un moyen de paiement.
- Une confirmation de commande doit s’afficher une fois le paiement validé.

**User Story 6**: En tant que vendeur, je veux pouvoir voir les commandes passées pour mes produits afin de les préparer et les expédier.

**Critères d'acceptation** :

- Une section "Commandes" doit lister les commandes reçues avec les détails : produit(s), quantité, adresse de livraison, statut de la commande.
- Le vendeur doit pouvoir marquer une commande comme "Préparée" ou "Expédiée".

#### 2.4 Évaluation et commentaires des produits

**User Story 7**: En tant qu'acheteur, je veux pouvoir laisser une évaluation et un commentaire sur un produit afin de partager mon avis.

**Critères d'acceptation** :

- Une section "Avis" doit être disponible sur chaque page produit.
- Les utilisateurs doivent pouvoir attribuer une note (1 à 5 étoiles) et rédiger un commentaire.
- Les commentaires doivent inclure le nom de l’acheteur et la date de publication.
- Les commentaires doivent être soumis uniquement si l’acheteur a commandé le produit.

**User Story 8**: En tant qu'acheteur, je veux pouvoir consulter les évaluations et commentaires des produits afin de prendre une décision d'achat éclairée.

**Critères d'acceptation** :

- Les évaluations doivent afficher la moyenne des notes et le nombre total de commentaires.
- Les commentaires doivent être triés par date, du plus récent au plus ancien.

