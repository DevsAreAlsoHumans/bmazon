import React from 'react';
import { Link } from "react-router-dom"; // Importation de Link pour la navigation

function Product({ nom, prix, images, id }) {
  // Fonction pour ajouter le produit au panier dans le localStorage
  const addToCart = () => {
    const product = { id, nom, prix, images };

    // Récupérer les articles déjà présents dans le localStorage (panier)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Ajouter le produit au panier (s'il n'est pas déjà dedans)
    cart.push(product);

    // Sauvegarder à nouveau dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Vous pouvez aussi afficher une alerte pour informer l'utilisateur que l'article a été ajouté
    alert('Produit ajouté au panier');
  };

  return (
    <div className="Produit">
      <Link to={`/produit/${id}`}> {/* Lien vers la page de détails du produit */}
        <img src={images} alt={nom} />
        <h2>{nom}</h2>
        <p>{prix}€</p>
      </Link>
      <button type="button" className="add-button" onClick={addToCart}>
        Ajouter un article
      </button>
    </div>
  );
}

export default Product;
