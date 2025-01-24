import React from 'react';

function Product({ nom, prix, image }) {
  return (
    <div className="Produit">
      <img src={image} alt={nom} />
      <h2>{nom}</h2>
      <p>{prix}€</p>
      <button type="submit" className="add-button">Ajouter un article</button>
    </div>
  );
}

export default Product;
