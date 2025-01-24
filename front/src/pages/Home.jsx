import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import Navbar from "../components/Navbar"; // Importation de la Navbar

function Home() {
  const [produit, setProduit] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("http://localhost:3000/produits/");
        setProduit(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProduits();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Accueil</h1>
      <div className="Produit-container">
          {produit.map((product) => (
                <Product
                  nom={product.nom}
                  prix={product.prix}
                  images={product.images}
                  id={product.id}
                />
          ))}
        </div>
    </>
  );
}

export default Home;
