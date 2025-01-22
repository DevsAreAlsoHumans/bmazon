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
