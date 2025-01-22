-- Vérifie si la base de données existe, sinon la crée
CREATE DATABASE IF NOT EXISTS bmazon;

-- Utilise la base de données bmazon
USE bmazon;

-- Vérifie si la table "produits" existe, sinon la crée
CREATE TABLE IF NOT EXISTS produits (
    id INT AUTO_INCREMENT PRIMARY KEY,       
    nom VARCHAR(255) NOT NULL,             
    description TEXT,                       
    prix DECIMAL(10, 2) NOT NULL,           
    stock_disponible INT NOT NULL DEFAULT 0, 
    images TEXT                            
);

-- Table Commandes
CREATE TABLE IF NOT EXISTS commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produit_id INT NOT NULL, 
    date_commande DATETIME DEFAULT CURRENT_TIMESTAMP,
    statut ENUM('en cours', 'expédiée', 'livrée') DEFAULT 'en cours',
    montant_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE
);

-- Table Commentaires
CREATE TABLE IF NOT EXISTS commentaires (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produit_id INT NOT NULL,
    note TINYINT CHECK (note BETWEEN 1 AND 5),
    commentaire TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE
);
