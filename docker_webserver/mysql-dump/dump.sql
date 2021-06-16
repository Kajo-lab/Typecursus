SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `typingspeedtest`
--
DROP DATABASE IF EXISTS `typingspeedtest`;
CREATE DATABASE IF NOT EXISTS `typingspeedtest` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `typingspeedtest`;

-- --------------------------------------------------------
-- Pietjes wachtwoord is pietje (hash wordt opgeslagen in de tabel)
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
                            `iduser` int(11) NOT NULL,
                            `name` varchar(50) NOT NULL,
                            `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `user` (`iduser`, `name`, `password`) VALUES
(1, 'Pietje', '7d46cc4d3937dfe04d8a8a064c50c6f4bd1dc88f');

-- --------------------------------------------------------
DROP TABLE IF EXISTS `sentence`;
CREATE TABLE `sentence` (
                         `idsentence` int(11) NOT NULL,
                         `sentence` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `sentence` (`idsentence`, `sentence`) VALUES
(1, 'Geld moet rollen, anders hadden ze het wel vierkant gemaakt.'),
(2, 'Het doel van de natuurwetenschap is niet alleen de uitspraken van anderen te accepteren, maar eerder de oorzaken te onderzoeken die in de natuur aan het werk zijn.'),
(3, 'In alle toegespitste uitspraken moet een zekere graad van nauwkeurigheid worden opgeofferd aan de beknoptheid.'),
(4, 'Wie geen dromen heeft, heeft evenmin een werkelijkheid.'),
(5, 'Opvoeding is een kwestie van liefde, geduld en wijsheid. En de laatste twee groeien waar de eerste heerst.'),
(6, 'Kennis is nog geen wijsheid.'),
(7, 'Alles dat werkelijk groots en inspirerend is, is gecreëerd door een individu dat kon werken in vrijheid.'),
(8, 'Genoeg hebben is geluk; meer dan genoeg hebben brengt ongeluk. Dat geldt voor alle dingen, vooral echter voor geld.'),
(9, 'Humor en geduld zijn de kamelen waarmee je door alle woestijnen kunt gaan.'),
(10, 'Eerlijk duurt wel vaak het langst; maar verliest het van de angst.'),
(11, 'Als ik ben wat ik heb en ik verlies alles wat ik heb, wie ben ik dan?'),
(12, 'Zolang iemand gelooft dat zijn ideaal en doel buiten hem liggen, boven de wolken, in het verleden of in de toekomst, zal hij buiten zichzelf gaan en voldoening zoeken waar het niet gevonden kan worden. Hij zal overal naar oplossingen en antwoorden zoeken behalve waar ze gevonden kunnen worden: in zichzelf.'),
(13, 'Afzweren en overboord gooien, randverschijnselen van de volwassenheid.'),
(14, 'Het is niet waar dat mensen kunnen worden verdeeld in absoluut eerlijke personen en absoluut oneerlijke personen. Onze eerlijkheid varieert met de druk die erop wordt uitgeoefend.'),
(15, 'Het leven is net een ballonvaart: je weet zeker dat je straks moet landen maar je weet tot het laatste moment niet waar en hoe.');

-- --------------------------------------------------------