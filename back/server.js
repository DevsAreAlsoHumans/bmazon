const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

require('dotenv-flow').config();

app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as ID ' + db.threadId);
});

// Assurez-vous que la base de données active est définie
db.query('USE bmazon', (err) => {
    if (err) {
        console.error('Erreur lors de la sélection de la base de données :', err.message);
    } else {
        console.log('Base de données active : bmazon');
    }
});

// Lecture et exécution du fichier SQL pour initialiser la base de données

// Routes pour l'api

// Obtenir tous les produits
app.get('/produits', (req, res) => {
    const sql = 'SELECT * FROM produits';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des produits');
        }
        res.json(results);
    });
});

// Ajouter un nouveau produit
app.post('/produits', (req, res) => {
    const { nom, description, prix, stock_disponible, images } = req.body;

    if (!nom || !prix || !stock_disponible || !images ) {
        return res.status(400).send('Les champs nom, prix, stock_disponible et images sont obligatoires');
    }

    const sql = 'INSERT INTO produits (nom, description, prix, stock_disponible, images) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nom, description, prix, stock_disponible, images], (err, result) => {
        if (err) {
            return res.status(500).send('Erreur lors de l\'ajout du produit');
        }
        res.status(201).json({ id: result.insertId, nom, description, prix, stock_disponible, images });
    });
});

// Mettre à jour un produit
app.put('/produits/:id', (req, res) => {
    const { id } = req.params;
    const { nom, description, prix, stock_disponible, images } = req.body;

    const sql = `
        UPDATE produits 
        SET nom = COALESCE(?, nom),
            description = COALESCE(?, description),
            prix = COALESCE(?, prix),
            stock_disponible = COALESCE(?, stock_disponible),
            images = COALESCE(?, images)
        WHERE id = ?`;

    db.query(sql, [nom, description, prix, stock_disponible, images, id], (err, result) => {
        if (err) {
            return res.status(500).send('Erreur lors de la mise à jour du produit');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Produit non trouvé');
        }
        res.json({ id, nom, description, prix, stock_disponible, images });
    });
});

// Supprimer un produit
app.delete('/produits/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM produits WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send('Erreur lors de la suppression du produit');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Produit non trouvé');
        }
        res.send(`Produit avec l'id ${id} supprimé.`);
    });
});


app.listen(PORT, () => {
    console.log(`Serveur API en cours d'execution sur le http://localhost${PORT}`)
})