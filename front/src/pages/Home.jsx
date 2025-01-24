import React from "react";
import Product from "../components/Product";
import { useEffect, useState } from 'react';
import axios from 'axios'; 

  function Home() {
    const [produit, setProduit] = useState([]);
  
    useEffect(() => {
      const fetchProduits = async () => {
        try {
          const response = await axios.get('http://localhost:3000/produits/');
          setProduit(response.data);
          console.log(produit)
        } catch (error) {
          console.error("Erreur lors de la récupération des produits:", error);
        }
      };
  
      fetchProduits();
    }, []);

  return (
    <>
      <h1>Page des Produits</h1>
      <div className="products-list">
      {produit.map(product => (
          <Product 
            key={product.id} 
            nom={product.nom} 
            prix={product.prix} 
            image={product.image} 
          />
        ))}
      </div>
    </>
  );
}

export default Home;
