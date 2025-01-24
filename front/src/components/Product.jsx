import React from 'react';

function Product({ nom, prix, images }) {
  return (
    <div className="Produit">
      <img src={images} alt={nom} />
      <h2>{nom}</h2>
      <p>{prix}€</p>
      <button type="submit" className="add-button">Ajouter un article</button>
    </div>
  );
}

export default Product;
