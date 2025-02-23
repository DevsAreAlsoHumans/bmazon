const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

require('dotenv-flow').config();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT", "DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
  
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

// Produits 

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

// Obtenir tous les produits avec ID
app.get('/produits/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM produits WHERE id = ?';
    db.query(sql, [id], (err, results) => {
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
    const sql = 'DELETE FROM commentaires WHERE id = ?';

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


//Commentaires

// Obtenir tous les commentaires
app.get('/commentaires', (req, res) => {
    const sql = 'SELECT * FROM commentaires';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des commentaires');
        }
        res.json(results);
    });
});

// Obtenir tous les commentaires avec un produit_id
app.get('/commentaires/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM commentaires WHERE produit_id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des produits');
        }
        res.json(results);
    });
});

// Ajouter un nouveau commentaires
app.post('/commentaires', (req, res) => {
    const { produit_id, note, commentaire, date } = req.body;

    if (!produit_id || !note || !commentaire || !date ) {
        return res.status(400).send('Les champs note, commentaire et date sont obligatoires');
    }

    if (note >5 || note <0 ) {
        return res.status(400).send('La note doit être comprise entre 0 et 5');
    }
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(date)) {
        return res.status(400).send("La date doit être au format 'YYYY-MM-DD HH:MM:SS'");
    }
    

    const sql = 'INSERT INTO commentaires (produit_id, note, commentaire, date) VALUES (?, ?, ?, ?)';
    db.query(sql, [produit_id, note, commentaire, date], (err, result) => {
        if (err) {
            return res.status(500).send('Erreur lors de l\'ajout du commentaire');
        }
        res.status(201).json({ id: result.insertId, produit_id, note, commentaire, date});
    });
});

// Mettre à jour un commentaires
app.put('/commentaires/:id', (req, res) => {
    const { id } = req.params;
    const { produit_id, note, commentaire, date} = req.body;

    const sql = `
        UPDATE commentaires 
        SET produit_id = COALESCE(?, produit_id),
            note = COALESCE(?, note),
            commentaire = COALESCE(?, commentaire),
            date = COALESCE(?, date)
        WHERE id = ?`;

 
    db.query(sql, [produit_id, note, commentaire, date, id], (err, result) => {

        if (note >5 || note <0 ) {
            return res.status(400).send('La note doit être comprise entre 0 et 5');
        }
        if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(date)) {
            return res.status(400).send("La date doit être au format 'YYYY-MM-DD HH:MM:SS'");
        }
        
        if (err) {
            console.log(db.query(sql, [produit_id, note, commentaire, date, id]))
            return res.status(500).send('Erreur lors de la mise à jour du commentaire');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('commentaires non trouvé');
        }
        res.json({ id, produit_id, note, commentaire, date });
    });
});

// Supprimer un commentaires
app.delete('/commentaires/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM commentaires WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send('Erreur lors de la suppression du commentaires');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Commentaires non trouvé');
        }
        res.send(`Commentaires avec l'id ${id} supprimé.`);
    });
});

// Commandes

// Obtenir toutes les commandes
app.get('/commandes', (req, res) => {
    const sql = 'SELECT * FROM commandes';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des commandes');
        }
        res.json(results);
    });
});

// Ajouter une nouvelle commande
app.post('/commandes', (req, res) => {
    const { produit_id, date_commande, statut, montant_total } = req.body;

    if (!produit_id || !date_commande || !statut || !montant_total ) {
        return res.status(400).send('Les champs produit_id, date_commande, statut et montant_total sont obligatoires');
    }

    const sql = 'INSERT INTO commandes (produit_id, date_commande, statut, montant_total) VALUES (?, ?, ?, ?)';
    db.query(sql, [produit_id, date_commande, statut, montant_total], (err, result) => {
        if (err) {
            return res.status(500).send("Erreur lors de l\'ajout d'une commande");
        }
        res.status(201).json({ id: result.produit_id, date_commande, statut, montant_total });
    });
});


// Mettre à jour une commande
app.put('/commandes/:id', (req, res) => {
    const { id } = req.params;
    const { produit_id, date_commande, statut, montant_total } = req.body;

    const sql = `
        UPDATE commandes 
        SET produit_id = COALESCE(?, produit_id),
            date_commande = COALESCE(?, date_commande),
            statut = COALESCE(?, statut),
            montant_total = COALESCE(?, montant_total)
        WHERE id = ?`;

    db.query(sql, [produit_id, date_commande, statut, montant_total, id], (err, result) => {
        if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(date)) {
            return res.status(400).send("La date doit être au format 'YYYY-MM-DD HH:MM:SS'");
        }
        if (statut !== 'en attente' && statut !== 'expédiée' && statut !== 'livrée') {
            return res.status(400).send("Le statut doit être 'en attente', 'expédiée' ou 'livrée'");
        }
        if (err) {
            console.log(err);
            return res.status(500).send('Erreur lors de la mise à jour de la commande');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Commande non trouvée');
        }
        res.json({ id, produit_id, date_commande, statut, montant_total });
    });
});

// Supprimer une commande
app.delete('/commandes/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM commandes WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send('Erreur lors de la suppression de la commande');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Commande non trouvé');
        }
        res.send(`Commande avec l'id ${id} supprimé.`);
    });
});

// Commande_produits

// Obtenir toutes les commande_produits
app.get('/commande_produits', (req, res) => {
    const sql = 'SELECT * FROM commande_produits';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur lors de la récupération des commandes_produits');
        }
        res.json(results);
    });
});

// Ajouter une nouvelle commande_produit
app.post('/commandes_produits', (req, res) => {
    const { commande_id, produit_id, quantite, prix_unitaire } = req.body;

    if (!commande_id || !produit_id || !quantite || !prix_unitaire ) {
        return res.status(400).send('Les champs commande_id, produit_id, quantite et prix_unitaire sont obligatoires');
    }

    if (quantite < 0 || prix_unitaire < 0) {
        return res.status(400).send('La quantité et le prix unitaire doivent être supérieure à 0');
    }

    const sql = 'INSERT INTO commande_produits (commande_id, produit_id, quantite, prix_unitaire) VALUES (?, ?, ?, ?)';
    db.query(sql, [commande_id, produit_id, quantite, prix_unitaire], (err, result) => {
        if (err) {
            console.log(db.query(sql, [commande_id, produit_id, quantite, prix_unitaire]));
            console.log(err);
            return res.status(500).send("Erreur lors de l\'ajout d'une commande_produit");
        }
        res.status(201).json({ commande_id, produit_id, quantite, prix_unitaire });
    });
});

// Mettre à jour une commande_produit
app.put('/commandes_produits/:id', (req, res) => {
    const { id } = req.params;
    const { commande_id, produit_id, quantite, prix_unitaire } = req.body;

    const sql = `
        UPDATE commande_produits 
        SET commande_id = COALESCE(?, commande_id),
            produit_id = COALESCE(?, produit_id),
            quantite = COALESCE(?, quantite),
            prix_unitaire = COALESCE(?, prix_unitaire)
        WHERE id = ?`;

    db.query(sql, [commande_id, produit_id, quantite, prix_unitaire, id], (err, result) => {
        if (quantite < 0 || prix_unitaire < 0) {
            return res.status(400).send('La quantité et le prix unitaire doivent être supérieure à 0');
        }
        if (err) {
            return res.status(500).send('Erreur lors de la mise à jour de la commande_produit');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Commande_produit non trouvé');
        }
        res.json({ id, commande_id, produit_id, quantite, prix_unitaire });
    });
});

// Supprimer une commande_produit
app.delete('/commandes_produits/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM commande_produits WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send('Erreur lors de la suppression de la commande_produit');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Commande_produit non trouvé');
        }
        res.send(`Commande_produit avec l'id ${id} supprimé.`);
    });
});

app.listen(PORT, () => {
    console.log(`Serveur API en cours d'execution sur le http://localhost:${PORT}`)
})