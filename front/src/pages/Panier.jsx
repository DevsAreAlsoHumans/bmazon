import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Importation de la Navbar

function Panier() {
  const [cartItems, setCartItems] = useState([]);

  // Récupérer les articles du panier depuis le localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []); // L'effet ne se déclenche qu'une seule fois lors du premier rendu

  // Fonction pour supprimer un produit du panier
  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Fonction pour gérer la commande
  const handleOrder = () => {
    alert('Commande passée avec succès !');
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Panier</h1>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <div className="panier-container">
            {cartItems.map((item, index) => (
              <div key={index} className="Produit">
                <h3>{item.nom}</h3>
                <img src={item.images} alt={item.nom} />
                <p>{item.prix}€</p>
                <button onClick={() => removeItemFromCart(item.id)} className="remove-button">
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Conteneur centré pour le bouton "Commander" */}
        {cartItems.length > 0 && (
          <div className="center-button">
            <button onClick={handleOrder} className="order-button">
              Commander
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Panier;
