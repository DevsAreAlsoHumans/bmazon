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
        console.log(produit);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProduits();
  }, []);

  return (
    <>

      <Navbar />
      <div className="Produit-container">
        {produit.map((product) => (
          <Product
            key={product.id}
            nom={product.nom}
            prix={product.prix}
            images={product.images}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
