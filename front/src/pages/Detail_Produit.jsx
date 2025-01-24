import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Utilisation de useParams pour obtenir l'ID du produit depuis l'URL
import axios from "axios";
import Navbar from "../components/Navbar"; // Importation de la Navbar

function ProductDetails() {
  const { id } = useParams(); // Obtient l'ID du produit depuis l'URL
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/produits/${id}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit:", error);
      }
    };

    fetchProductDetails();
  }, [id]); // L'ID change donc la récupération se fait à chaque fois que l'ID change

  if (!productDetails) {
    return <div>Chargement...</div>;
  }

  return (
    <>
    <Navbar />
    <div>
      <h1>{productDetails.nom}</h1>
      <img src={productDetails.images} alt={productDetails.nom} />
      <p>{productDetails.prix}€</p>
      <p>Description : {productDetails.description}</p>
    </div>
    </>
    
  );
}

export default ProductDetails;
