import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Importation de la Navbar

function Panier() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Récupérer les articles du panier depuis le localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    // Calculer le prix total
    const total = cart.reduce((sum, item) => sum + item.prix * (item.quantite || 1), 0);
    setTotalPrice(total);
  }, []);

  // Fonction pour supprimer un produit du panier
  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    // Recalculer le prix total
    const total = updatedCart.reduce((sum, item) => sum + item.prix * (item.quantite || 1), 0);
    setTotalPrice(total);
  };

  // Fonction pour gérer la commande
  const handleOrder = () => {
    alert("Commande passée avec succès !");
    localStorage.removeItem("cart");
    setCartItems([]);
    setTotalPrice(0); // Réinitialiser le prix total
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
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="remove-button"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Affichage du prix total */}
        {cartItems.length > 0 && (
          <div className="total-price">
            <h2>Prix total : {totalPrice.toFixed(2)}€</h2>
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
