import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductDetails from "./pages/Detail_Produit"; // Import de la page des détails du produit
import Panier from "./pages/Panier"; // Import de la page des détails du produit

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route vers la page d'accueil */}
        <Route path="/produit/:id" element={<ProductDetails />} /> {/* Route pour afficher les détails du produit */}
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </Router>
  );
}

export default App;
