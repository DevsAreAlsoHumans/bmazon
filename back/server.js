const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// base de donnée fictive sous forme de array
let produits = [
    { id: 1, title: 'Produit 1'},
    { id: 2, title: 'Produit 2'},
]

// route pour l'api

// obtenir tous les produits
app.get('/produits', (req, res) => {
    res.json(produits);
})

// ajouter un nouveau produit
app.post('/produits', (req, res) => {
    const newProduit = {
        id: produits.length + 1,
        title: req.body.title,
    };
    produits.push(newProduit);
    res.status(201).json(newProduit);
})

// mettre à jour un produit
app.put('/produits/:id', (req, res) => {
    const produit = produit.find(t => t.id === parseInt(req.params.id));
    if(!produit) return res.status(404).send('produit non trouvé');

    produit.title = req.body.title || produit.title;
    res.json(produit);
})

// supprimer un produit
app.delete('/produits/:id', (req, res) => {
    const produitIndex = produits.findIndex(t => t.id === parseInt(req.params.id));
    if(produitIndex === -1) return res.status(404).send('Produit non trouvé');
    const deleteProduit = produits.splice(produitIndex, 1);
    res.json(deleteProduit);
})
app.listen(PORT, () => {
    console.log(`Serveur API en cours d'execution sur le http://localhost${PORT}`)
})