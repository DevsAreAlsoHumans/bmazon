-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 24 jan. 2025 à 11:37
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bmazon`
--

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `prix` decimal(10,2) NOT NULL,
  `stock_disponible` int NOT NULL DEFAULT '0',
  `images` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `description`, `prix`, `stock_disponible`, `images`) VALUES
(1, 'MacBook Air 2022', 'Ordinateur portable Apple, ultra-fin avec puce M2 et écran Retina 13,6 pouces.', 1499.99, 25, 'https://images.bfmtv.com/-x57Xup-_htFR6svUHNjgAYhvms=/0x0:2048x1638/2048x0/biz_dev/1665404376883_macbook_pro_jpg.jpg'),
(2, 'iPhone 13', 'Smartphone Apple 5G avec puce A15 Bionic, écran Super Retina XDR 6,1 pouces.', 899.99, 50, 'https://media.ldlc.com/r1600/ld/products/00/05/93/01/LD0005930188_1.jpg'),
(3, 'Aspirateur Dyson V15', 'Aspirateur balai sans fil avec technologie laser pour détecter la poussière invisible.', 629.99, 15, 'https://www.leparisien.fr/resizer/Km2-B09OMSiVGsUN8OV5bR1JyBM=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/M4HUV4R36FDMFHS5DEPNFV6DS4.jpg'),
(4, 'Montre connectée Garmin Fenix 7', 'Montre GPS multisport avec suivi de la fréquence cardiaque et cartes topographiques.', 699.99, 10, 'https://media.intersport.fr/is/image/intersportfr/0254001C7P_Q1?$produit_l$&$product_grey$'),
(5, 'Téléviseur Samsung 55\" QLED 4K', 'Téléviseur QLED 4K avec mode Ambiant et compatibilité HDR10+.', 1199.99, 30, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTl2ROY76um-eCjOaxLDCV4Rj70K0rzWI0Qw&s'),
(6, 'Chaise de bureau ergonomique', 'Chaise confortable avec support lombaire réglable et accoudoirs rembourrés.', 199.99, 100, 'https://kqueo.fr/cdn/shop/files/CHAISE-ERGONOMIQUE-KQUEO-AURA-NOIR_1.jpg?v=1708435171&width=2000'),
(7, 'AirPods Pro 2', 'Écouteurs sans fil Apple avec réduction active du bruit et audio spatial.', 279.99, 75, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-202409-gallery-1?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1726015508359'),
(8, 'Nintendo Switch OLED', 'Console de jeu portable avec écran OLED 7 pouces et 64 Go de stockage interne.', 349.99, 40, 'https://www.worldshop.eu/medias/img/8903407468574_w1500_z_6830532/nintendo-switch-console-neon-red-neon-blue.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
